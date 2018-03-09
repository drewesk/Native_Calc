import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    paddingTop: 20,
    backgroundColor: 'salmon',
  },
  bottom: {
    flex: 1,
    backgroundColor: 'red',
  },
  number: {
    color: '#fff',
    backgroundColor: 'slategrey',
    textAlign: 'right',  
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  row: {

  },
});

const App = () => <View style={ styles.container }>
  <View style={ styles.top }>
    <Text style={ styles.number } >0</Text>
    <Text style={ styles.number } >0</Text>
    <Text style={ styles.number } >0</Text>
  </View>
  <View style={ styles.bottom }>
    <View style={ styles.row }>

    </View>
  </View>
</View>
