import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Ajusta esta ruta según dónde esté App.jsx
import '../index.css'; // Si tienes estilos globales en src/index.css

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
