import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Login from './Login';
import Register from './Register';
import Admin from './Admin';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import compromissoReducer from './reducers/compromissoReducer';
import compromissoSaga from './sagas/compromissoSaga';

const rootReducer = combineReducers({
  compromissos: compromissoReducer,
  form: formReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(compromissoSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
