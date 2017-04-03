import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight} from "react-native";
import { Navigation } from "react-native-navigation";
import { registerScreens } from './screens';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import initialState from './store/initialState';

const store = configureStore(initialState);


registerScreens(store, Provider);

const navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white',
	topBarElevationShadowEnabled: false,
	navBarHideOnScroll: true,
	tabBarHidden: true,
	drawUnderTabBar: true
};

Navigation.startSingleScreenApp({
	screen: {
		screen: 'ReactNativeTS.HelloWorld',
		title: 'Contador',
		navigatorStyle,
		leftButtons: [
			{
				id: 'sideMenu'
			}
		]
	},
	drawer: {
		left: {
			screen: 'ReactNativeTS.Drawer'
		}
	}
});
