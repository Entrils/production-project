import React from 'react';
import { createRoot } from 'react-dom/client';
import { Counter } from './components/Counter';

const root = createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
    <Counter/>
</React.StrictMode>
);