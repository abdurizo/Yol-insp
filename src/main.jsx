import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { NavbarContextProvider } from './context'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NavbarContextProvider>
        <App />
    </NavbarContextProvider>
);

