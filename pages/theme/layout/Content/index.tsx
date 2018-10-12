import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import Left from '../Left';
import Right from '../Right';
class Content extends React.Component<any, any> {
  render() {
    return (
      <Provider store={store}>
        <div className="theme-content">
          <Left pageLan={this.props.pageLan} />
          <Right pageLan={this.props.pageLan} />
        </div>
      </Provider>
    );
  }
}
export default Content;
