import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CardView from 'react-native-cardview';

export default function SensorCards() {
  return (
    <View style={styles.MainContainer}>
      <CardView
        cardEvaluation={5}
        cardMaxEvaluation={5}
        cornerRadius={5}
        styles={styles.cardViewStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardView_InsideText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginTop: 50,
  },
  cardViewStyle: {
    width: 50,
    height: 50,
  },
  MainContainer: {
    flex: 1,
    backgroundColor: 'crimson',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
