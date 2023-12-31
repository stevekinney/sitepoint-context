import React from 'react';
import ReactDOM from 'react-dom/client';

import Application from './application';
import { ColorProvider } from './context';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ColorProvider>
      <Application />
    </ColorProvider>
  </React.StrictMode>,
);
