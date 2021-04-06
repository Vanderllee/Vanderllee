import React from 'react';

import { GlobalStyle } from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <h1>Sejam muuuuito bem vindos ao meu site!</h1>
      <br />
      <p>Meu nome é José Vanderli</p>
      <br />
      <a href="https://www.instagram.com/vanderllee/">@Vanderllee</a>
      <br />
      <a href="https://www.github.com/vanderllee">Vanderllee</a>
      <GlobalStyle />
    </>
  );
};
export default App;
