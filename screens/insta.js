import React from 'react';
import { Text, View } from 'react-native';
import AppHeader from '../screens/AppHeader'

export default class Instagram extends React.Component {
    render() {
      return (
      <View>
        <View>  <AppHeader/> </View>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
          <Text style={{flex:1, justifyContent:'center', textAlign:'center',color:'#FFA500',fontSize : 30}}> INSTAGRAM </Text>
        </View></View>
      );
    }
  }
