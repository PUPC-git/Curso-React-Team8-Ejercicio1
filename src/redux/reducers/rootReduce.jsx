import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { loggin } from "./loggin";
import { todosReducer } from "./todosReducer";


export const rootReducer = combineReducers(
    {
        //state name : recuder that will control it
        todosState: todosReducer,
        filterState: filterReducer,
        loginState: loggin

        // ... add more states and reducers to include them in the store
    }
)