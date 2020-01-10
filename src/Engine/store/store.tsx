import { applyMiddleware, combineReducers, createStore, Store, StoreEnhancer, compose } from 'redux';
import thunk from 'redux-thunk';
import { objsReducer, playerReducer, IPlayerState, IObjsState } from '../reducers';

export interface IAppState {
    playerState: IPlayerState;
    generalState: IObjsState;
}

const rootReducer = combineReducers<IAppState>({
    playerState: playerReducer,
    generalState: objsReducer
});

const configureStore = (): Store<IAppState, any> => {
    const store = createStore(rootReducer, undefined, compose(
        applyMiddleware(thunk),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      ));
    return store;
}

export default configureStore;