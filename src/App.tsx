import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DataContextProvider } from './hooks/useData';
import Routes from './Routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <Routes />
        <GlobalStyle />
      </DataContextProvider>
    </BrowserRouter>
  );
};

export default App;
