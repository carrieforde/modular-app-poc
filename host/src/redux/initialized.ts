import { useLayoutEffect, useState } from "react";
import { store } from "../services";

const STORE_KEY = "initialized"

const initialState = null;

const reducers = {
    setInitTime: () => new Date().toISOString()
}

export const useInitialized = (): string => {
    const [state, setState] = useState(store.getState()[STORE_KEY]);

    useLayoutEffect(() => {
        let lastState = store.getState()[STORE_KEY];

    return store.subscribe(() => lastState !== store.getState()[STORE_KEY] && setState((lastState = store.getState()[STORE_KEY])))
    }, []);

    return state;
}

export const setInitTime = () => store.dispatch({type: "setInitTime"});

// @ts-ignore
store.injectReducer(STORE_KEY, (state = initialState, {type, payload}) => reducers[type] ? reducers[type](state, payload) : state);
