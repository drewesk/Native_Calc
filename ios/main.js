import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View } from 'react-native';

import { pressNum } from './modules';
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
    color: '#FFF',
    backgroundColor: '#C4D2CD',
    textAlign: 'right',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: '#4A4F4D',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderColor: "#3F554D",
  },
});

const App = ({ currentNumber, pressNumWithDispatch }) => <View style={ styles.container }>
  <View style={ styles.top }>
    <Text style={ styles.number } >0</Text>
    <Text style={ styles.number } >0</Text>
    <Text style={ styles.number } >{ currentNumber }</Text>
  </View>
  <View style={ styles.bottom }>
    <View style={ styles.row }>
      <Button text="Clear"/>
      <Button text="Pow"/>
      <Button text="Swap"/>
      <Button text="/"/>
    </View>
    <View style={ styles.row }>
      <Button text="9" onPress={ pressNumWithDispatch } />
      <Button text="8" onPress={ pressNumWithDispatch } />
      <Button text="7" onPress={ pressNumWithDispatch } />
      <Button text="*" onPress={ pressNumWithDispatch } />
    </View>
    <View style={ styles.row }>
      <Button text="6" onPress={ pressNumWithDispatch } />
      <Button text="5" onPress={ pressNumWithDispatch } />
      <Button text="4" onPress={ pressNumWithDispatch } />
      <Button text="-" onPress={ pressNumWithDispatch } />
    </View>
    <View style={ styles.row }>
      <Button text="3" onPress={ pressNumWithDispatch } />
      <Button text="2" onPress={ pressNumWithDispatch } />
      <Button text="1" onPress={ pressNumWithDispatch } />
      <Button text="+" onPress={ pressNumWithDispatch } />
    </View>
    <View style={ styles.row }>
      <Button text="0" onPress={ pressNumWithDispatch } />
      <Button text="." onPress={ pressNumWithDispatch } />
      <Button text="enter" special  onPress={ pressNumWithDispatch } />
    </View>
  </View>
</View>

export default connect(
  state => ({ currentNumber: state }),
  dispatch =>
  bindActionCreators({
    pressNumWithDispatch: pressNum,
  }, dispatch)
)(App);
