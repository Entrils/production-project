import App from 'app/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';

import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';



const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <ErrorBoundary>
        <React.StrictMode>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </React.StrictMode>
    </ErrorBoundary>
    </BrowserRouter>
);