import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import './config/ReactotronConfig';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  well: {
    fontSize: 40,
    color: '#71c9',
  },
});

console.tron.log('hello');

function App() {
  return (
    <>
      <View style={styles.body}>
        <Text style={styles.well}>Welcome to react</Text>
      </View>
    </>
  );
}

export default App;
