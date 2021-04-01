import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import App from './App';
import { forbiddenWordsMiddleWare } from './redux/middleware';


const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
    forbiddenWordsMiddleWare
    ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

render(
  <Provider store={store}>
    <App />
  </ Provider>,
  document.getElementById('root')
);
