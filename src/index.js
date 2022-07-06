import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);


//! Kısaca; değişkenleri Routes içinde, kalıcı olanları ise BrowserRouter içinde çağırabiliriz diyebilir miyiz ?