// tslint:disable-next-line
import * as React from "react";
import * as ReactDom from "react-dom";

import {App} from "./web/App";
import createEngine from "redux-storage-engine-localstorage";
import {createProvider} from "./common/store/createProvider";
import {StorageEngine} from "redux-storage";

const storageEngine: StorageEngine = createEngine("app-storage");
const app: JSX.Element = createProvider(App, storageEngine);

ReactDom.render(
    app,
    document.getElementById("app")
);
