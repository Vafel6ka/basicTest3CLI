/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from "react";
import App from './App';
import {name as appName} from './app.json';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer  from "./src/store/redusers/rootReducer"

const store = createStore(rootReducer);

const RunRedux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => RunRedux);
