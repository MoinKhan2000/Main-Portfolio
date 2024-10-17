import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
