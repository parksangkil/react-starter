import * as reactIntl from "react-intl";
import * as React from "react";

import {StyleSheet, Text} from "react-native";

// Text component preserves spaces, so we need to normalize multiline strings
type Normalizer = (message: string) => string;
const normalizeMultilineString: Normalizer =
    (message: string) => message.replace(/ +/g, " ").trim();

export interface NativeComponentProps {
    style?: StyleSheet;
    intlProps: {};
};

/* tslint:disable:variable-name */
type NativeWrapper =
    (WrappedComponent: typeof React.Component) => typeof React.Component;
/* tslint:enable:variable-name */

// tslint:disable-next-line:variable-name typedef
const native = (WrappedComponent: typeof React.Component) =>
    class NativeComponent extends React.Component<NativeComponentProps, {}> {
        // tslint:disable-next-line: no-any
        public text: { setNativeProps: any };

        public constructor(props: NativeComponentProps) {
            super(props);
            this.onTextRef = this.onTextRef.bind(this);
        }

        // tslint:disable-next-line: no-any
        public onTextRef(text: any): void {
            this.text = text;
        }

        public setNativeProps(nativeProps: {}): void {
            if (typeof this.props.children === "function") {
                return;
            }
            this.text.setNativeProps(nativeProps);
        }

        public render(): JSX.Element {
            const style: StyleSheet = this.props.style;
            const intlProps: {} = this.props.intlProps;

            return (
                <WrappedComponent {...intlProps}>
                    {(message: string) =>
                        <Text ref={this.onTextRef} style={style}>
                            {normalizeMultilineString(message)}
                        </Text>
                    }
                </WrappedComponent>
            );
        }
    };

/* tslint:disable:variable-name typedef */
export const FormattedDate = native(reactIntl.FormattedDate);
export const FormattedMessage = native(reactIntl.FormattedMessage);
export const FormattedNumber = native(reactIntl.FormattedNumber);
export const FormattedPlural = native(reactIntl.FormattedPlural);
export const FormattedRelative = native(reactIntl.FormattedRelative);
export const FormattedTime = native(reactIntl.FormattedTime);
/* tslint:enable:variable-name */
