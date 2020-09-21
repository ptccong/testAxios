import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './Reducers/CounterReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Saga/rootSaga';
import CounterCompnent from './Component/CounterComponent';
const sagaMiddleware = createSagaMiddleware()
let store = createStore(allReducers,applyMiddleware(sagaMiddleware))
function App() {
  return (
    <Provider store={store}>
      <CounterCompnent />
    </Provider>
  )
}
sagaMiddleware.run(rootSaga)
export default App;