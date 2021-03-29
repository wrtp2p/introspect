import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Album } from '../../types';

// export type AlbumProps = {
//   album: Album,
// }

export type AlbumProps = {
    album: {
    id: string;
    imageUri: string;
    artistHeadline: string;
    }
}


const AlbumComponent = (props: AlbumProps) => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('NftScreen', { id: props.album.id })
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
          <Image source={{uri: props.album.imageUri}} style={styles.image}/>
          <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>

  )
}

export default AlbumComponent;
