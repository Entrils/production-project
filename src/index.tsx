import App from 'app/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';

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