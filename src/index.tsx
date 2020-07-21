import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './components/App';
import GlobalStyle from './components/global/globalStyles';
import Theme from './components/global/theme';

import '@reach/combobox/styles.css';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById('root'),
);
