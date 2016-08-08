import * as React from "react";
import * as Redux from "redux";
import * as Storage from "redux-storage";

import {IntlProvider} from "react-intl";
import {Provider} from "react-redux";
import {setUpStore} from "./setUpStore";
import {State} from "./State";
import {StorageEngine} from "redux-storage";

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
