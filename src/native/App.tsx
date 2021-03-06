import * as React from "react";

import {FormattedMessage, FormattedRelative} from "./i18n/Formatted";
import {styles} from "./App.styles";
import {Text, View} from "react-native";

export class App extends React.Component<{}, {}> {
    public constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload, {"\n"}
                    Shake or press menu button for dev menu
                </Text>
                <FormattedMessage
                    intlProps={{
                        defaultMessage: "default text",
                        id: "pageOne.test"
                    }}
                />
                <FormattedRelative
                    intlProps={{
                        value: Date.now()
                    }}
                />
            </View>
        );
    }
};
