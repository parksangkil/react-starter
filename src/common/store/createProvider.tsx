import * as React from "react";
import {Provider} from "react-redux";
import {setUpStore} from "./setUpStore";
import {StorageEngine} from "redux-storage";
import * as Storage from "redux-storage";
import * as Redux from "redux";
import {State} from "./State";

export function createProvider(  // tslint:disable-next-line:variable-name
    App: typeof React.Component,
    storageEngine: StorageEngine
): JSX.Element {
    const storageEngineMiddleware: Redux.Middleware =
        Storage.createMiddleware(storageEngine);
    const store: Redux.Store<State> = setUpStore(storageEngineMiddleware);
    const load: Storage.Loader<State> = Storage.createLoader(storageEngine);
    load(store);  // TODO: handle error states (load has Promise interface)

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
