import albumCategories from "../../data/albumCategories";
import AlbumCategory from "../AlbumCategory";
import {FlatList, View} from "react-native";
import * as React from "react";
import {useRoute} from "@react-navigation/native";
import {useEffect} from "react";
import AlbumHeader from "../AlbumHeader";
import albumDetails from "../../data/albumDetails";
import SongListItem from "../SongListItem";


const DropFeed = () => {

    const route = useRoute();

    useEffect(() => {
        console.log(route);
    }, [])

    return (
        <View style={{justifyContent: "space-around", alignSelf: 'center'}}>
            <View style={{flexDirection: 'row'}}>
                <FlatList
                    data={albumDetails}
                    renderItem={({item}) => <AlbumHeader album={item} />}
                    keyExtractor={(item) => item.id}
                    horizontal
                />
                {/*<FlatList*/}
                {/*    data={albumDetails}*/}
                {/*    renderItem={({item}) =>*/}
                {/*        <AlbumHeader*/}
                {/*            album={item.album}*/}

                {/*    />}*/}
                {/*    keyExtractor={(item) => item.id}*/}
                {/*/>*/}
                {/*<AlbumHeader album={albumDetails} />*/}
                {/*<View style={{alignSelf: 'center', justifyContent: 'center', paddingTop: 20, backgroundColor: 'transparent'}}>*/}
                {/*    <ReactPlayer url='https://www.youtube.com/watch?v=KtEaZ9etM1I' controls={true} />*/}
                {/*</View>*/}
            </View>
            {/*<FlatList*/}
            {/*    data={albumDetails.songs}*/}
            {/*    renderItem={({item}) => <SongListItem song={item} />}*/}
            {/*    keyExtractor={(item)  => item.id}*/}
            {/*/>*/}

        </View>
    )
}

export default DropFeed;
