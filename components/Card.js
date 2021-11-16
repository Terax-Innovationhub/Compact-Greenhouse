import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {SimpleCard} from '@paraboly/react-native-card';
import react from 'react';

export default function SensorCards() {
  let allCards = [
    {name: 'Sensor 1', type: 'Airsensor'},
    {name: 'Sensor 2', type: 'Watersensor'},
  ];
  for (let i = 0; i < allCards.length; i++) {
    let cardsOnScreen = allCards.map(function (card) {
      return <Card text="test" />;
    });

    return cardsOnScreen;
  }
}

function Card(props) {
  return (
    <SimpleCard
      title="Custom width & dynamic height simple card: Multiple Lines"
      styles={{width: 200}}
      cardTextStyle={{fontSize: 20}}
      text={'Name:' + props.text}
      // text="Aliquip officia est cillum ipsum cupidatat occaecat ut cillum quis mollit. Aliquip ipsum officia dolor amet sint et id ut. Mollit ea ut occaecat consectetur ut laborum nisi dolor mollit culpa Lorem mollit do. Incididunt nostrud exercitation veniam exercitation ex et dolor esse laboris elit fugiat velit elit cillum."
    />
  );
}

function addCard(props) {
  props.push('Sensor');
}

{
  /* <SimpleCard
  title="Custom width & dynamic height simple card: Multiple Lines"
  styles={{width: 200, color: 'green'}}
  cardTextStyle={{fontSize: 20}}
  text="Aliquip officia est cillum ipsum cupidatat occaecat ut cillum quis mollit. Aliquip ipsum officia dolor amet sint et id ut. Mollit ea ut occaecat consectetur ut laborum nisi dolor mollit culpa Lorem mollit do. Incididunt nostrud exercitation veniam exercitation ex et dolor esse laboris elit fugiat velit elit cillum."></SimpleCard>; */
}

// const styles = StyleSheet.create({
//   cardView_InsideText: {
//     fontSize: 20,
//     color: '#000',
//     textAlign: 'center',
//     marginTop: 50,
//   },
//   cardViewStyle: {
//     width: 150,
//     height: 150,
//     backgroundColor: 'green',
//   },
//   MainContainer: {
//     flex: 1,
//     backgroundColor: 'crimson',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });