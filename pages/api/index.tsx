import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';
import components from './components';
require('./index.scss');

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="left-panel">
          <div className="common-nav">
            {
              Object.keys(components).map((folderKey) => {
                const itemsInFolder = components[folderKey];
                return (
                  <div className="common-nav-folder" key={`folder-${folderKey}`}>
                    <h3 className="common-nav-title">{folderKey}</h3>
                    <ul className="common-nav-list">
                      {
                        Object.keys(itemsInFolder).map((key) => {
                          return (
                            <li className="common-nav-item" key={`component-${folderKey}-${key}`}>
                              <Link className="common-nav-link" to={`/${folderKey.toLowerCase()}/${key.toLowerCase()}`}>{key}</Link>
                            </li>
                          );
                        })
                      }
                    </ul>
                  </div>
                );
              })
            }
          </div>
        </div>
        <div className="right-panel">
          {this.props.children}
        </div>
      </div>
    )
  }
}

const routes = Object.keys(components).map((folderKey) => {
  const itemsInFolder = components[folderKey];
  return Object.keys(itemsInFolder).map((key) => {
    return (
      <Route
        exact
        key={`component-${folderKey}-${key}`}
        path={`/${folderKey.toLowerCase()}/${key.toLowerCase()}`}
        component={itemsInFolder[key]}
      />
    );
  });
}).reduce((prev, curr) => { return prev.concat(curr); }, []);

render((
  <HashRouter basename="/">
    <App>
      <Route exact path='/' component={() => (<div>home</div>)}/>
      {routes}
    </App>
  </HashRouter>
), document.getElementById('main-content'));
