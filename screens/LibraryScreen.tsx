import * as React from 'react';
import {FlatList, ImageBackground, Platform, ScrollView, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import styled from 'styled-components/native';

import ReactPlayer from 'react-player'

import Album from '../components/Album';
import AlbumCategory from "../components/AlbumCategory";
import albumCategories from "../data/albumCategories"
import EmbedWebView from "../components/Trollbox";
import EmbedView from "../components/Trollbox";
import WebViewTest from "../components/Trollbox";
import WebView from "react-native-webview";
import {WebViewQuillJS} from "react-native-webview-quilljs";


const album ={
    id: '1',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii'
}

const albumCategory = {
    id: '1',
    title: 'Happy Vibes',
    albums: [
        {
            id: '1',
            imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
            artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii'
        }, {
            id: '2',
            imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
            artistsHeadline: 'Post Malone, Drake, Eminem'
        },
        {
            id: '3',
            imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
            artistsHeadline: 'Journey, Escape, Avicii'
        },
        {
            id: '4',
            imageUri: 'https://i.pinimg.com/originals/a2/0d/37/a20d37791f8ad5cd54734cd3af559cc9.jpg',
            artistsHeadline: 'Bob Marley, Cardi B, Stas Mihailov'
        },
    ]

}


const StyledView = styled.View`
  //background-color: papayawhip;
  //width: 200,
  //background-color: #f2f0e4;
  flex: 1;
  opacity: 1;
  background-image:  radial-gradient(ellipse at 100% 100%,rgba(5, 0, 144, 1), rgba(242, 240, 228, 1), rgba(242, 240, 228))

`
const image = {uri: '../assets/magicpattern-mesh-gradient-1616272801094.png' };

export default function LibraryScreen() {
    return (
        <View style={styles.container1} >
            {/*<ImageBackground source={require('../assets/images/magicpattern-mesh-gradient-1616273854447.png')} style={{flex: 1}}>*/}
            <StyledView>
                <ScrollView style={styles.container2} showsHorizontalScrollIndicator={false}>

                    <FlatList
                        data={albumCategories}
                        renderItem={({item}) => (
                            <AlbumCategory
                                title={item.title}
                                albums={item.albums}
                                keyExtractor={(item) => item.id}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                    />

                </ScrollView>
            </StyledView>
            {/*</ImageBackground>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container2: {
        flex: 1,
        flexDirection: 'column',
        width: '80%',
        alignSelf: 'center',
        backgroundColor: 'transparent',
        opacity: 1

    },
    container1: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        alignSelf: 'center',
        backgroundColor: 'white'

    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },

});
