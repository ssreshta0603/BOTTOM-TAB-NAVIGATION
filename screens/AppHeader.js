import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}> BUZZ APP </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#FCBFBD',
  },
  text:{
    color: '#F70F7B',
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;