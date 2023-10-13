import { StylesProvider } from '@theme/styles-provider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
		<StylesProvider>
			<Home />
		</StylesProvider>
  </React.StrictMode>,
);
