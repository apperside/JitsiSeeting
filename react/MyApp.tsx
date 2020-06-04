// @flow

// Apply all necessary polyfills as early as possible to make sure anything imported henceforth
// sees them.
import './features/mobile/polyfills';

import React, { PureComponent } from 'react';
import { AppRegistry, View, Text } from 'react-native';

import { App } from './features/app';
import { _initLogging } from './features/base/logging/functions';
import { IncomingCallApp } from './features/mobile/incoming-call';

declare var __DEV__;

/**
 * The type of the React {@code Component} props of {@link Root}.
 */
type Props = {

    /**
     * The URL, if any, with which the app was launched.
     */
    url: Object | string
};


const MyApp: React.FC<Props> = props => {

    return <View style={{ backgroundColor: "white", flex: 1 }}>
        <Text>CIAO</Text>
    </View>
}

export default MyApp;