// Renders the 'App' component. the component is wrapped in the 'Provider' component making the Redux store available.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);