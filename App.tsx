import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {View, Image, Text, SafeAreaView} from "react-native";

import introspect_logo_png from './assets/images/introspect_logo_png.png';
import EmbedWebView from "./components/Trollbox";
import WebViewTest from "./components/Trollbox";
import WebView from "react-native-webview";
import PlayerWidget from "./components/PlayerWidget";
import ConnectWallet from "./components/ConnectWallet";
import LogoHeader from "./components/LogoHeader";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (


      <SafeAreaProvider>

          <View style={{height: '95%', backgroundColor: 'green'}}>
              <Navigation colorScheme={colorScheme} />
              <LogoHeader/>
          </View>



        <ConnectWallet/>


        <StatusBar />

        <PlayerWidget/>

      </SafeAreaProvider>
    );
  }
}
