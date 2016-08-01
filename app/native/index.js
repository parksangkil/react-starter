import * as React from 'react';
import { Text, View } from 'react-native';
class reactWebNativeReduxStarter extends React.Component {
    render() {
        return (React.createElement(View, {style: styles.container}, React.createElement(Text, {style: styles.welcome}, "Welcome to React Native!"), React.createElement(Text, {style: styles.instructions}, "To get started, edit index.android.js"), React.createElement(Text, {style: styles.instructions}, "Double tap R on your keyboard to reload, ", '\n', "Shake or press menu button for dev menu")));
    }
}
;
const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
};
export default reactWebNativeReduxStarter;
//# sourceMappingURL=index.js.map