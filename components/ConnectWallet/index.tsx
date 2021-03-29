import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {Album} from "../../types";
import styles from './styles';

// const onPressConnectWallet = () => {
//     navigator.navigate
// }

const ConnectWallet = () => {

    return (
        // <TouchableOpacity onPress={}>
            <View style={styles.container}>
                <View style={styles.button}>
                    <Text style={styles.text}>{'Connect Wallet'}</Text>
                </View>
            </View>
        // </TouchableOpacity>
    )
}

export default ConnectWallet;
