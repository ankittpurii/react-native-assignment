/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/redux/reducer'

import { PostsScreen } from './src/components/screens'

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <PostsScreen />
    </Provider>
  );
};

export default App;



