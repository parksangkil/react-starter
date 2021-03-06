import {TextStyle, ViewStyle} from "react-native";

type Styles = {
    container: ViewStyle,
    welcome: TextStyle,
    instructions: TextStyle
};

export const styles: Styles = {
    container: {
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        flex: 1,
        justifyContent: "center",
    },
    instructions: {
        color: "#333333",
        marginBottom: 5,
        textAlign: "center",
    },
    welcome: {
        fontSize: 20,
        margin: 10,
        textAlign: "center",
    },
};
