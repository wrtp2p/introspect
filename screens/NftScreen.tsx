import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import { useRoute } from '@react-navigation/native'

import SongListItem from "../components/SongListItem";
import albumDetails from "../data/albumDetails";
import AlbumHeader from "../components/AlbumHeader";

const NftScreen = () => {

    const route = useRoute();

    useEffect(() => {
        console.log(route);
    }, [])

    return (
    <View>
        <Text style={{color: 'black'}}> Hello from NFT Screen</Text>
        <FlatList
            data={albumDetails.songs}
            renderItem={({item}) => <SongListItem song={item} />}
            keyExtractor={(item)  => item.id}
            ListHeaderComponent={()=> <AlbumHeader album={albumDetails} />}
        />
    </View>
    )
}

export default NftScreen;
