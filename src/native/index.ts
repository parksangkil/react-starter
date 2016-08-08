// tslint:disable-next-line
import * as React from "react";
import {createProvider} from "../common/store/createProvider";
import {App} from "./App";
import {StorageEngine} from "redux-storage";
import createEngine from "redux-storage-engine-reactnativeasyncstorage";

const storageEngine: StorageEngine = createEngine("app-storage");

// tslint:disable-next-line:variable-name
export const NativeApp: () => JSX.Element =
    () => createProvider(App, storageEngine);
