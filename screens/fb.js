import React from 'react';
import { Text, View } from 'react-native';
import AppHeader from '../screens/AppHeader'

export default class Facebook extends React.Component {
    render() {
      return (
        <View>
        <View>  <AppHeader/> </View>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
          <Text style={{flex:1, justifyContent:'center', textAlign:'center',color:'#30D2FF',fontSize : 30}}> FACEBOOK </Text>
        </View></View>
      );
    }
  }
