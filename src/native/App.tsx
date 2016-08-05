import * as React from "react";
import {Text, View} from "react-native";
import {styles} from "./App.styles";
import {createProvider} from "../common/store/createProvider";
import createEngine from "redux-storage-engine-reactnativeasyncstorage";
import {StorageEngine} from "redux-storage";

class AppComponent extends React.Component<any, any> {
    public constructor(props: any) {
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
            </View>
        );
    }
};

const storageEngine: StorageEngine = createEngine("gina-storage");

// tslint:disable-next-line:variable-name
export const App = () => createProvider(AppComponent, storageEngine);
