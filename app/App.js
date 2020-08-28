import React, {Component} from 'react';
import AppNavigator from './container/AppNavigator';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from './redux/middleware/logger';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';

console.disableYellowBox = true;

class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const createStoreWithMW = applyMiddleware(logger, thunk)(createStore);
    const store = createStoreWithMW(reducer);

    return (
      <Provider store = {store}>
        <AppNavigator/>
      </Provider>
    );
  }
}

export default App;
