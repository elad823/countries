import React, { Component } from 'react';
import {AppRegistry, Button,TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import ItemScreen from './screens/ItemScreen';
import rootReducer from './reducers';

const store = createStore(rootReducer);

const AppNavigator = createStackNavigator({
  Login:{
    screen: LoginScreen,
    navigationOptions:{
      header: null
    }
  },
  Main:{
    screen: MainScreen,
    navigationOptions:{
      title:"Countries List",
      headerLeft : null
    }
  },
  Item:ItemScreen
},{
  initialRouteName: 'Login',
  headerLayoutPreset :'center',
   defaultNavigationOptions: {
     headerStyle: {
       backgroundColor: 'black',
     },
     headerTintColor: '#fff',
     headerTitleStyle: {
       fontWeight: 'bold',
       fontSize:25
     },

   },
});


const AppContainer = createAppContainer(AppNavigator);

export default  RNRedux = () => (
  <Provider store = { store }>
    <AppContainer />
  </Provider>
)


AppRegistry.registerComponent('countries', () => RNRedux);
