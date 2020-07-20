import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import '@reach/combobox/styles.css';

import App from './components/App';
import GlobalStyle from './components/global/globalStyles';
import Theme from './components/global/theme';

import './styles/style.css';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById('root'),
);
