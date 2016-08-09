import * as React from "react";

import {FormattedMessage} from "react-intl";

export class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div>
                Hello, world!
                <FormattedMessage
                    id="pageOne.test"
                    defaultMessage="default text"
                    tagName="div"
                />
            </div>
        );
    }
}
