import { applyMiddleware, combineReducers, createStore, Store, compose } from 'redux';
import thunk from 'redux-thunk';
import { IPlayer, playerReducer, chestReducer, IChest, IWall, wallReducer } from './reducers';

export interface IAppState {
    player: IPlayer;
    chests: IChest[];
    walls: IWall[];
}

const rootReducer = combineReducers<IAppState>({
    player: playerReducer,
    chests: chestReducer,
    walls: wallReducer
});

const configureStore = (): Store<IAppState, any> => {
    const store = createStore(rootReducer, undefined, compose(
        applyMiddleware(thunk),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()));
    return store;
}

export default configureStore;