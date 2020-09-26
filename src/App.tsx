import React from 'react';
import { DataContextProvider } from './hooks/useData';
import Home from './pages/Home';
import GlobalStyle from './styles/global';

function App() {
  return (

    <DataContextProvider>
      <Home />
      <GlobalStyle />
    </DataContextProvider>

  );
}

export default App;
