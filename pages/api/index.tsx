import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';
import components from './components';
require('./index.scss');
require('./markdown.scss');

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="left-panel">
          <div className="nav-children">
            {
              Object.keys(components).map((folderKey) => {
                const itemsInFolder = components[folderKey];
                return (
                  <div key={`folder-${folderKey}`}>
                    <h3>{folderKey}</h3>
                    <ul className="nav-list">
                      {
                        Object.keys(itemsInFolder).map((key) => {
                          return (
                            <li key={`component-${folderKey}-${key}`}>
                              <Link className="nav-link" to={`/${folderKey.toLowerCase()}/${key.toLowerCase()}`}>
                                <span className="nav-link-zh">{key}</span>
                              </Link>
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
          <div className="api-container">{this.props.children}</div>
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
