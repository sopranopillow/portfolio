import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import configureStore, { IAppState } from './Engine/store/store';

interface IProps {
    store: Store<IAppState>;
}

const Root: React.FC<IProps> = props => {
    return (
        <Provider store={props.store}>
            <App/>
        </Provider>
    );
};

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
