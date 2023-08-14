import React from 'react';
import { createRoot } from "react-dom/client";
import {Provider} from "react-redux";

import App from './App/App';
import store from './App/store';
import './index.scss';

const rootElement = document.getElementById("root");

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <Provider store={store}>
            <App/>
        </Provider>
    );
}
