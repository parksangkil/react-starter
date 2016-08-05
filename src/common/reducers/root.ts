import {combineReducers} from "redux";

function sampleReducer (state = {}, action: any) {
    return state;
}

export const rootReducer = combineReducers({
    sampleReducer
});
