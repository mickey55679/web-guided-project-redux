// to get our root reducer

import { combineReducers } from "redux";
import dragonListReducer from "./dragonListReducer";
import titleReducer from "./titleReducer";

export const rootReducer = combineReducers({
    dragonList: dragonListReducer,
    title: titleReducer 
})