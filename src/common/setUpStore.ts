import {createStore, applyMiddleware, compose} from "redux";
import * as thunk from "redux-thunk";
import {rootReducer} from "./reducers/root";

const middleware: Array<any> = [thunk.default];

function setUpReduxDevTools() {
    return typeof window === "object" &&
        typeof (window as any).devToolsExtension !== "undefined" ?
        (window as any).devToolsExtension() : (f: any) => f;
}

declare var process: {
    env: {
        NODE_ENV: string
    }
};

function applyMiddlewareAndInDevModeUseDevTools(middleware: Array<any>) {
    if (process.env.NODE_ENV === "production") {
        return applyMiddleware(...middleware);
    } else {
        return compose(
            applyMiddleware(...middleware),
            setUpReduxDevTools()
        );
    }
}

export function setUpStore(initialState: any) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddlewareAndInDevModeUseDevTools(middleware)
    );
};
