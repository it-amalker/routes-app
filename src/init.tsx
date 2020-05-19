import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

export default (): void => {
  ReactDOM.render(<App />, document.getElementById('app'));
};
