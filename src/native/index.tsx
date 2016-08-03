import * as React from "react";
import {Text, View} from "react-native";
import {styles} from "./index.styles";

export class App extends React.Component<any, any> {
    public constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native! fdsfds
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload, {"\n"}
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
};
