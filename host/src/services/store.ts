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
