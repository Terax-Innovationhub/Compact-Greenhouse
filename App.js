import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/navigation/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
