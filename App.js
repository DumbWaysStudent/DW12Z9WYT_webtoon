// import React, {Component} from 'react';
// import {View, Text} from 'react-native';

// import Login from './src/components/Login/Login';
// import ForYou from './src/components/ForYou/ForYou';

// class App extends Component {
//   render() {
//     return <ForYou />;
//   }
// }

// export default App;

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './src/components/Login/Login';
import ForYou from './src/components/ForYou/ForYou';
import Favourite from './src/components/Favourite/Favourite';
import profile from './src/components/Profile/profile';
import DetailScreen from './src/components/DetailScreen/DetailScreen';

const AuthStack = createStackNavigator({Login: Login});
const AppStack = createStackNavigator(
  {
    ForYou: ForYou,
    Favourite: Favourite,
    profile: profile,
    DetailScreen: DetailScreen,
  },
  // {headerMode: 'none'},
);

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      //Auth: AuthStack,
    },
    {
      initialRouteName: 'App',
    },
  ),
);
