import { useLayoutEffect, useState } from "react";
// @ts-ignore
import {store} from 'host/services';

export interface IItem {
    id: number;
    text: string;
}

const STORE_KEY = 'todo';

function getUniqueId() {
    return (list: IItem[]) => list.length > 0 ? Math.max(...list.map(t => t.id + 1)) : 1
}

const initialState = [
    {id: 1, text: "clean the house"},
    {id: 2, text: "buy milk"}
]

const reducers = {
    addItem: (list: IItem[], item: IItem) => [...list, {...item, id: getUniqueId}],
    deleteItem: (list: IItem[], item: IItem) => list.filter(todo => todo.id !== item.id)
}

// MODULE EXPORTS

export const useList = (): IItem[] => {
    const [state, setState] = useState(store.getState()[STORE_KEY]);
    
    useLayoutEffect(() => {
        let lastState = store.getState()[STORE_KEY];

        return store.subscribe(() => lastState !== store.getState()[STORE_KEY] && setState((lastState = store.getState()[STORE_KEY])))}, [setState]);

    return state;
}

export const addItem = (item: Partial<IItem>) => store.dispatch({type: "addItem", payload: item});
export const deleteItem = (item: IItem) => store.dispatch({type: "deleteItem", payload: item});


// MODULE - INJECT REDUCER INTO STORE

// @ts-ignore
store.injectReducer(STORE_KEY, (state = initialState, {type, payload}) => reducers[type] ? reducers[type](state, payload) : state);
