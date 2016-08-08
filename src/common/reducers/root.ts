import * as Redux from "redux";

import {combineReducers} from "redux";
import {State} from "../store/State";

function sampleReducer (state: State = {}, action: Redux.Action): {} {
    return state;
}

export const rootReducer: Redux.Reducer<State> = combineReducers({
    sampleReducer
});
