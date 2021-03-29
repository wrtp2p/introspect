import React, { Component } from 'react';
import {WebView, View, TouchableWithoutFeedback, Image, Text} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import styles from "../Album/styles";
import {AlbumProps} from "../Album";

const WebViewTest = () => {


    return (
        // <TouchableWithoutFeedback onPress={onPress}>
            <View style={{width: 100, height: 100}}>
                <WebView
                   source={{html: '<p>Here I am</p>' }}
                />
            </View>
        // </TouchableWithoutFeedback>

    )
}

export default WebViewTest;
