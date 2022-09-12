import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../assets/styles/global';
import Route from '../../routes';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Route />
    </BrowserRouter>
  );
}

export default App;
