import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
