import {React, StrictMode, createElement} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.createRoot(div).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});