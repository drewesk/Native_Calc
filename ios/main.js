import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View } from 'react-native';

import { pressNum, enter, operation } from './modules';
import Button from './Button'

baseNumber = {
  backgroundColor: '#C4D2CD',
  textAlign: 'right',
  padding: 10,
  fontSize: 30,
  borderWidth: 2,
  borderColor: '#4A4F4D',
}

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
  append: {
    color: '#FFF',
    ...baseNumber,
  },
  replace: {
    color: 'red',
    ...baseNumber,
  },
  push: {
    color: 'rebeccapurple',
    ...baseNumber,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderColor: "#3F554D",
  },
});

const App = ({
  calculatorState: { stack, inputState },
  operationAction,
  pressNumWithDispatch,
  enterAction
}) => (
<View style={styles.container}>
  <View style={styles.top}>
    <Text style={styles.append}>{stack[2] || 0}</Text>
    <Text style={styles.append}>{stack[1] || 0}</Text>
    <Text style={styles[inputState]}>{stack[0] || 0}</Text>
  </View>
  <View style={styles.bottom}>
    <View style={styles.row}>
      <Button text="clear" />
      <Button text="pow" onPress={operationAction} />
      <Button text="swap" />
      <Button text="/" onPress={operationAction} />
    </View>
    <View style={styles.row}>
      <Button text="9" onPress={pressNumWithDispatch} />
      <Button text="8" onPress={pressNumWithDispatch} />
      <Button text="7" onPress={pressNumWithDispatch} />
      <Button text="*" onPress={operationAction} />
    </View>
    <View style={styles.row}>
      <Button text="6" onPress={pressNumWithDispatch} />
      <Button text="5" onPress={pressNumWithDispatch} />
      <Button text="4" onPress={pressNumWithDispatch} />
      <Button text="-" onPress={operationAction} />
    </View>
    <View style={styles.row}>
      <Button text="3" onPress={pressNumWithDispatch} />
      <Button text="2" onPress={pressNumWithDispatch} />
      <Button text="1" onPress={pressNumWithDispatch} />
      <Button text="+" onPress={operationAction} />
    </View>
    <View style={styles.row}>
      <Button text="0" onPress={pressNumWithDispatch} />
      <Button text="." onPress={pressNumWithDispatch} />
      <Button text="enter" onPress={enterAction} special />
    </View>
  </View>
</View>
);

export default connect(
  state => ({ calculatorState: state }),
  dispatch =>
  bindActionCreators({
    pressNumWithDispatch: pressNum,
    enterAction: enter,
    operationAction: operation
  }, dispatch)
)(App);
