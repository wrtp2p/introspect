import React, {useContext, useEffect, useState} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { API, graphqlOperation } from 'aws-amplify';

import styles from './styles';
import {Song} from "../../types";
import {Sound} from "expo-av/build/Audio/Sound";

import { AppContext } from '../../AppContext';
import {getSong} from "../../src/graphql/queries";

const song = {
  id: '1',
  uri: 'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp4',
      imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Helen',
}

const PlayerWidget = () => {
  //
  // const [song, setSong] = useState(null);
  const [sound, setSound] = useState<Sound|null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number|null>(null);
  const [position, setPosition] = useState<number|null>(null);
  //
  // const { songId } = useContext(AppContext);
  //
  // useEffect(() => {
  //   const fetchSong = async () => {
  //     try {
  //       const data = await API.graphql(graphqlOperation(getSong, { id: songId }))
  //       setSong(data.data.getSong);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //
  //   fetchSong();
  // }, [songId])
  //
  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  }
  //
  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Sound.createAsync(
      { uri: song.uri },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    )

    setSound(newSound)
  }
  //
  useEffect(() => {
    if (song) {
      playCurrentSong();
    }
  }, [song])
  //
  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
  }

  const onPlayForwardPress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.setPositionAsync(getPosition() + 5000 )
    } else {
      await sound.playAsync();
    }
  }

  const onPlayBackwardPress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.setPositionAsync(getPosition() - 5000 )
    } else {
      await sound.playAsync();
    }
  }


  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }

    return (position / duration) * 100;
  }

  if (!song) {
    return null;
  }

  const getDuration = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }
    return (duration);
  }
  if (!song) {
    return null;
  }

  const getPosition = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }
    return (position);
  }
  if (!song) {
    return null;
  }


  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  millisToMinutesAndSeconds(298999); // "4:59"
  millisToMinutesAndSeconds(60999);  // "1:01"

  return (
    <View style={styles.container}>

      <View style={styles.row}>
        <View style={styles.iconsContainer}>

          <TouchableOpacity onPress={onPlayBackwardPress}>
          <AntDesign name="banckward" size={15} color={"white"}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPlayPausePress}>
            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={20} color={"white"}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPlayForwardPress}>
          <AntDesign name="forward" size={15} color={"white"}/>
          </TouchableOpacity>

        </View>

        <View style={{width: 50, marginLeft: 60, alignSelf: 'center'}}>
          <Text style={{color: 'white'}}>{millisToMinutesAndSeconds(getPosition())}</Text>
        </View>
        <View style={styles.rightContainer}>

            <View style={{flex: 1, height: 3, backgroundColor: 'grey', alignSelf: 'center', flexDirection: 'row'}}>
              <View style={[styles.progress, { width: `${getProgress()}%`, }]} />
              <View style={{width: 10, height: 10, borderRadius: 50, alignSelf: 'center', backgroundColor: 'orange'}}/>
            </View>

            <View style={{flex: 1/10, marginLeft: 20, alignSelf: 'center'}}>
                    <Text style={{color: 'white'}}>{millisToMinutesAndSeconds(getDuration())}</Text>
            </View>

            <Image source={{ uri: song.imageUri }} style={styles.image} />

            <View style={styles.nameContainer}>
              <Text style={styles.title}>{song.title}</Text>
              <Text style={styles.artist}>{song.artist}</Text>
            </View>

        </View>
      </View>
    </View>
  )
}

export default PlayerWidget;
