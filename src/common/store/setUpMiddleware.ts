import * as Redux from "redux";
import * as Thunk from "redux-thunk";

import {applyMiddleware, compose} from "redux";

const middlewareList: Array<Redux.Middleware> = [Thunk.default];

/* tslint:disable */
function setUpReduxDevTools() {
    return typeof window === "object" &&
        typeof (window as any).devToolsExtension !== "undefined" ?
        (window as any).devToolsExtension() : (f: any) => f;
}
/* tslint:enable */

declare var process: {
    env: {
        NODE_ENV: string
    }
};

function applyMiddlewareAndInDevModeUseDevTools(
    middleware: Array<Redux.Middleware>
): Redux.GenericStoreEnhancer {
    if (process.env.NODE_ENV === "production") {
        return applyMiddleware(...middleware);
    } else {
        return compose(
            applyMiddleware(...middleware),
            setUpReduxDevTools()
        );
    }
}

export function setUpMiddleware(
    storageEngineMiddleware: Redux.Middleware
): Redux.GenericStoreEnhancer {
    middlewareList.push(storageEngineMiddleware);
    return applyMiddlewareAndInDevModeUseDevTools(middlewareList);
}
