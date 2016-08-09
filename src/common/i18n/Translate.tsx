import * as React from "react";

/* tslint:disable:no-require-imports no-var-requires no-any */
// core.js polyfill includes Intl polyfill
(global as any).IntlPolyfill =
    require("../../../node_modules/intl/lib/core.js");
(global as any).Intl = (global as any).IntlPolyfill;
(global as any).IntlPolyfill.__applyLocaleSensitivePrototypes();
// polyfills for locale-data
require("../../../node_modules/intl/locale-data/jsonp/cs.js");
require("../../../node_modules/intl/locale-data/jsonp/en.js");
/* tslint:enable:no-require-imports no-var-requires no-any */

import * as cs from "react-intl/locale-data/cs";
import * as en from "react-intl/locale-data/en";

import {addLocaleData, IntlProvider} from "react-intl";
import {Translation} from "./Translation";
import {cs as csTranslation} from "./translations/cs";

type TranslateProps = {
    children?: React.ReactChild
};

addLocaleData([...cs, ...en]);
const locale: string = "cs";
const messages: Translation = csTranslation;

export function Translate(props: TranslateProps): JSX.Element {
    return (
        <IntlProvider locale={locale} messages={messages}>
            {props.children}
        </IntlProvider>
    );
}
