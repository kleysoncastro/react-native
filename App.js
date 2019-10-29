import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>

          <View style={styles.body}>

          <Text style={styles.well}>Welcome to react</Text>  

      </View>
    </>
  );
};

const styles = StyleSheet.create({

  body: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  well: {
    fontSize: 40,
    color: '#71c9'
  }
});

export default App;
