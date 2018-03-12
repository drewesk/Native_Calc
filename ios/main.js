import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View } from 'react-native';
import Button from './Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    paddingTop: 20,
  },
  bottom: {
    flex: 1,
  },
  number: {
    color: '#9CE9C1',
    backgroundColor: '#424242',
    textAlign: 'right',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: '#000',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderColor: "#C4EFE0",
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
      <Button text="Clear"/>
      <Button text="Pow"/>
      <Button text="Swap"/>
      <Button text="/"/>
    </View>
    <View style={ styles.row }>
      <Button text="9" />
      <Button text="8" />
      <Button text="7" />
      <Button text="*" />
    </View>
    <View style={ styles.row }>
      <Button text="6" />
      <Button text="5" />
      <Button text="4" />
      <Button text="-" />
    </View>
    <View style={ styles.row }>
      <Button text="3" />
      <Button text="2" />
      <Button text="1" />
      <Button text="+" />
    </View>
    <View style={ styles.row }>
      <Button text="0" />
      <Button text="." />
      <Button text="enter" special />
    </View>
  </View>
</View>

export default connect()(App);
