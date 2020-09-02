import React from 'react';
import './App.scss';
import Login from './pages/Login/Login';
//import Todos from './pages/Home/Todos';
import {Provider} from 'react-redux';
import generateStore from './redux/store';

function App() {
  const store = generateStore()
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App