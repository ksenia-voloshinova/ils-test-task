import React from 'react';
import './index.scss';
import App from './App/App';
import store from './App/store';
import { createRoot } from "react-dom/client";
import {Provider} from "react-redux";

const rootElement = document.getElementById("root");

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <Provider store={store}>
            <App/>
        </Provider>
    );
}
