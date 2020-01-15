import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { IPlayer, playerReducer } from '../reducers';

export interface IAppState {
    player: IPlayer;
}

const rootReducer = combineReducers<IAppState>({
    player: playerReducer
});

const configureStore = (): Store<IAppState, any> => {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}

export default configureStore;