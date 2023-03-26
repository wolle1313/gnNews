import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";

import { DataDetailsContextProvider } from 'contexts/DataDetailsContext';

import './index.css';
import App from './components/App';
import { store } from './redux/store';

import './translation/i18n'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
    <Provider store={store}>
    <DataDetailsContextProvider>
      <App />
    </DataDetailsContextProvider>
    </Provider>
    </BrowserRouter>
);
