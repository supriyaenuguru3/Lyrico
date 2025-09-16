import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MusicProvider } from './context/MusicContext'; // 👈 import

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MusicProvider>
      <App />
    </MusicProvider>
  </BrowserRouter>
);
