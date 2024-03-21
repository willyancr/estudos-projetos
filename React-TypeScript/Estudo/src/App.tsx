import * as React from 'react';
import DateVenda from './DateVenda';
import useFetch from './useFetch';
import UserContextProvider from './UserContext';
import Header from './Header';
import Context from './Context';

function App() {
  return (
    <>
      <UserContextProvider>
        <Header />
        <Context />
      </UserContextProvider>
    </>
  );
}

export default App;
