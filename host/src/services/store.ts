// @ts-nocheck
import { combineReducers, createStore } from "redux";

let reducers: Record<string, any> = {};

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers();

export const store = createStore<any>(s => s, enhancer);

store.injectReducer = (key: string, reducer: any) => {
    reducers[key] = reducer;
    store.replaceReducer(combineReducers(reducers));
}

export function getState(key: string) {
    return store.getState()[key]
}

export function subscribe(key: string, fn: (ls: any) => void) {
    let lastState = getState(key);

    return store.subscribe(() => lastState !== getState(key) && fn((lastState = getState(key))))
}

export function injectNewReducer(key: string, initialState: any, reducers: Record<string, any>) {
    // @ts-ignore
    store.injectReducer(key, (state = initialState, {type, payload}) => reducers[type] ? reducers[type](state, payload) : state)
}
