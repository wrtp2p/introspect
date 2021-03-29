import * as React from 'react';
import {FlatList, ScrollView, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import albumCategories from "../data/albumCategories";
import AlbumCategory from "../components/AlbumCategory";

import styled from 'styled-components/native';

const StyledView = styled.View`
  //background-color: papayawhip;
  //width: 200,
  //background-color: #f2f0e4;
  flex: 1;
  opacity: 1;
  background-image:  radial-gradient(ellipse at 100% 140%,rgba(5, 0, 144, 1), rgba(242, 240, 228, 1), rgba(242, 240, 228))

`

export default function PublishScreen() {
  return (
      <View style={styles.container1} >
        {/*<ImageBackground source={require('../assets/images/magicpattern-mesh-gradient-1616273854447.png')} style={{flex: 1}}>*/}
        <StyledView>
          <ScrollView style={styles.container2} showsHorizontalScrollIndicator={false}>


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
