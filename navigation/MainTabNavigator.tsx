import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import {View} from "react-native";
import LibraryScreen from "../screens/LibraryScreen";
import PublishScreen from "../screens/PublishScreen";
import NftScreen from "../screens/NftScreen";

const BottomTab = createMaterialTopTabNavigator<BottomTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      swipeEnabled={true}
      tabBarOptions={{
          activeTintColor: Colors[colorScheme].tint,
          style: {
              backgroundColor: '#f2f0e4',
              width: '30%',
              alignSelf: 'flex-end',
              marginRight: 200,
              // flex: 1,
          },
          labelStyle: {
              fontWeight: 'bold',
          }
      }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
        <BottomTab.Screen
            name="Publish"
            component={TabThreeNavigator}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
            }}
        />
    </BottomTab.Navigator>
      //
  )
      ;
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (

    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
            headerShown: false,
            headerTitle: '',
            headerStyle: {
                backgroundColor: '#f2f0e4',
                shadowRadius: 0,
                shadowOffset: {
                    height: 0,
                }},
        }}
      />
        <TabOneStack.Screen
            name="NftScreen"
            component={NftScreen}
            options={{
                headerShown: false,
                headerTitle: 'NFT Screen',
                headerStyle: {
                    backgroundColor: '#f2f0e4',
                    shadowRadius: 0,
                    shadowOffset: {
                        height: 0,
                    }},
            }}
        />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{headerShown: false, headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabTwoThree = createStackNavigator<TabTwoParamList>();

function TabThreeNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="PublishScreen"
                component={PublishScreen}
                options={{headerShown: false, headerTitle: 'Tab Two Title' }}
            />
        </TabTwoStack.Navigator>
    );
}
