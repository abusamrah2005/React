import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import { Button, colors } from 'react-native-elements';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.jdfdgfg</Text>
      <Text>Open up App.jdfdgfg</Text>
      <Text>Open up App.jdfdgfg</Text>
      <Button title='Add New Student' icon={{ name: 'code' }} />

=======

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
>>>>>>> 4c42ae231cc1e909d23ac349668d564309506d22
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    image: './',
  },
  text: {
    backgroundColor: 'blue',
    fontSize: 24,
    color: 'white',
    padding: 10,
  },
  Button: {
    backgroundColor: '#000',
=======
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
>>>>>>> 4c42ae231cc1e909d23ac349668d564309506d22
  },
});
