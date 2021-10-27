import { useLayoutEffect, useState } from "react";
import { store } from "../services";
import { getState, injectNewReducer, subscribe } from "../services/store";

const STORE_KEY = "initialized"

const initialState = null;

const reducers = {
    setInitTime: () => new Date().toISOString()
}

export const useInitialized = (): string => {
    const [state, setState] = useState(getState(STORE_KEY));

    useLayoutEffect(() => subscribe(STORE_KEY, setState), []);

    return state;
}

export const setInitTime = () => store.dispatch({type: "setInitTime"});

injectNewReducer(STORE_KEY, initialState, reducers)
