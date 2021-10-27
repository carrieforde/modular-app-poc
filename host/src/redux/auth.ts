import { useLayoutEffect, useState } from "react";
import { getState, subscribe, store, injectNewReducer } from "../services/store";


const STORE_KEY = "auth";

const initialState = false;

const reducers = {
    login: () => true,
    logout: () => false,
};

export const useAuth = (): boolean => {
    const [state, setState] = useState<boolean>(getState(STORE_KEY));

    useLayoutEffect(() => subscribe(STORE_KEY, setState), []);

    return state;
}

export const login = () => store.dispatch({type: "login"});
export const logout = () => store.dispatch({type: "logout"});

injectNewReducer(STORE_KEY, initialState, reducers);
