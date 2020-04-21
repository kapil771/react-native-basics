import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

function HelloWorldApp(props) {
  return (
    <View style={styles.center}>
      <Text>Hello, {props.name}!</Text>
    </View>
  )
}

function LotsOfHello(){
  return (
    <View style={[styles.center, {top: 50}]}>
      <HelloWorldApp name='India' />
      <HelloWorldApp name='World' />
      <HelloWorldApp name='Universe' />
    </View>
  );
}
export default LotsOfHello;
