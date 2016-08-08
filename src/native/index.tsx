import {App} from "./App";
import {createProvider} from "../common/store/createProvider";
import createEngine from "redux-storage-engine-reactnativeasyncstorage";
import {StorageEngine} from "redux-storage";

const storageEngine: StorageEngine = createEngine("app-storage");

// tslint:disable-next-line:variable-name
export const NativeApp = () => createProvider(App, storageEngine);
