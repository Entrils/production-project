import React from 'react';
import { createRoot } from 'react-dom/client';
import { Counter } from './components/Counter';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeProvider';

const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <React.StrictMode>
        <ThemeProvider>
        <App/>
        </ThemeProvider>
</React.StrictMode>
    </BrowserRouter>
);