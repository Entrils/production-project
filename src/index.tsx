import App from 'app/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss'
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';



const root = createRoot(document.getElementById('root'));

root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <React.StrictMode>
                 <ThemeProvider>
                     <App/>
                 </ThemeProvider>
                </React.StrictMode>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
);