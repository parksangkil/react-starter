// tslint:disable-next-line
import * as React from "react";
import * as ReactDom from "react-dom";
import {App} from "./web/App";
import {createProvider} from "./common/store/createProvider";

ReactDom.render(createProvider(App), document.getElementById("app"));
