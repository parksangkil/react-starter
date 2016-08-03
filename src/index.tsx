import * as React from "react";
import * as ReactDom from "react-dom";

class App extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <div>
                Hello, world!
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById("app"));
