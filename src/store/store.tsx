import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { ILoopState, loopReducer } from '../reducers/LoopReducer';

export interface IAppState {
    loopState: ILoopState;
}

const rootReducer = combineReducers<IAppState>({
    loopState: loopReducer
});

const configureStore = (): Store<IAppState, any> => {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}

export default configureStore;