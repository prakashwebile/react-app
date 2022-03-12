import './App.css';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux'
import store from './store';
import Home from './Home';

function App(props) {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
