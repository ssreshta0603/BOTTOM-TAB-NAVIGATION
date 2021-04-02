import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Facebook from './screens/fb'
import Instagram from './screens/insta'

export default class App extends React.Component {
  render(){
    return (
        <View style={styles.container}>
        <AppContainer />
        </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  FACEBOOK :  Facebook,
  INSTAGRAM: Instagram
});

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
