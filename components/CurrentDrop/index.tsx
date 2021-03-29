import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import { useRoute } from '@react-navigation/native'

import SongListItem from "../SongListItem";
import albumDetails from "../../data/albumDetails";
import AlbumHeader from "../AlbumHeader";
import ReactPlayer from "react-player";

const CurrentDrop = () => {

    const route = useRoute();

    useEffect(() => {
        console.log(route);
    }, [])

    return (
        <View style={{justifyContent: "center", alignSelf: 'center'}}>
            <View style={{flexDirection: 'row'}}>
                <AlbumHeader album={albumDetails} />
                {/*<View style={{alignSelf: 'center', justifyContent: 'center', paddingTop: 20, backgroundColor: 'transparent'}}>*/}
                {/*    <ReactPlayer url='https://www.youtube.com/watch?v=KtEaZ9etM1I' controls={true} />*/}
                {/*</View>*/}
            </View>
            <FlatList
                data={albumDetails.songs}
                renderItem={({item}) => <SongListItem song={item} />}
                keyExtractor={(item)  => item.id}
            />
        </View>
    )
}

export default CurrentDrop;
