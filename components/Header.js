import * as React from 'react';
import {Animated, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import PagerView from 'react-native-pager-view';

// const Header = () => {
//   return (
//     <View style={styles.header}>
//       <Text style={styles.text}>Dashboard</Text>
//     </View>
//   );
// };

const FirstRoute = () => (
  <View key="0" style={[styles.container, {backgroundColor: '#ffffff'}]}>
    <Text>Hoi Chris</Text>
  </View>
);
const SecondRoute = () => (
  <View key="1" style={[styles.container, {backgroundColor: '#673ab7'}]} />
);

const ThirdRoute = () => (
  <View key="2" style={[styles.container, {backgroundColor: 'chartreuse'}]} />
);

const FourthRoute = () => (
  <View key="3" style={[styles.container, {backgroundColor: 'darkorange'}]} />
);

export default class Header extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'My Dashboard'},
      {key: 'second', title: 'My Rooms'},
      {key: 'third', title: 'All Rooms'},
      {key: 'fourth', title: 'All Sensors'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({index: i})}>
              <Animated.Text style={{opacity}}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});
