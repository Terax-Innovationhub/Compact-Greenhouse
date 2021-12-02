import React from 'react';
import {StyleSheet} from 'react-native';
import {SimpleCard} from '@paraboly/react-native-card';

/**
 *
 * @returns a card for every sensor there is
 */
export default function SensorCards() {
  let allCards = [
    {name: 'Sensor 1', type: 'Airsensor'},
    {name: 'Sensor 2', type: 'Watersensor'},
    {name: 'Sensor 3', type: 'Dirtsensor'},
    {name: 'Sensor 4', type: 'Lightsensor'},
    {name: 'Sensor 5', type: 'Test'},
  ];

  return allCards.map(card => (
    <Card key={card.name} name={card.name} type={card.type} />
  ));
}

/**
 *
 * @param {*} props
 * @returns a card
 */
function Card(props) {
  return (
    <SimpleCard
      title="Custom width & dynamic height simple card: Multiple Lines"
      styles={styles.cardStyle}
      cardTextStyle={styles.cardTextStyle}
      text={'Name: ' + props.name + ', Type: ' + props.type}
    />
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    width: 200,
  },
  cardTextStyle: {
    fontSize: 18,
  },
});
