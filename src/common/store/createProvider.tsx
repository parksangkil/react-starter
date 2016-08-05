import * as React from "react";
import {Provider} from "react-redux";
import {setUpStore} from "./setUpStore";

const store = setUpStore({});

// tslint:disable-next-line:variable-name
export function createProvider(App: typeof React.Component): JSX.Element {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
