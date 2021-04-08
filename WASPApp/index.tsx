import 'react-native-gesture-handler';
import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux'
import {store} from './src/redux/stores'

const WASApp = () => {
    return(
            <Provider store={store}>
                <App />
            </Provider>  
    )
}
AppRegistry.registerComponent(appName, () => WASApp);
