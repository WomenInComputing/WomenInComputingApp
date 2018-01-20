/* navigation stuff: https://reactnavigation.org/docs/intro/basic-app 
   https://facebook.github.io/react-native/docs/navigation.html#react-navigation
*/

/* style stuff: https://facebook.github.io/react-native/docs/style.html */

import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home - Women In Computing'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{color: '#00ff00', marginBottom: '5%'}}>University of Wisconsin - Milwaukee</Text>
        <Image
          source={require('./img/wiclogo.png')}
        />
        <Button
          onPress={() => navigate('About')}
          title="About us"
        />
        <Button
          onPress={() => navigate('Meetings')}
          title="Meetings"
        />
      </View>);
  }
}

class AboutScreen extends React.Component {
  static navigationOptions = {
    title: "About"
  };
  render() {
    return <Text>About</Text>;
  }
}

class MeetingScreen extends React.Component {
  static navigationOptions = {
    title: "Meetings"
  };
  render() {
    return <Text>Meetings</Text>;
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Meetings: { screen: MeetingScreen },
  About: { screen: AboutScreen }
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', 
    alignItems: 'center',
    justifyContent: 'center',
  }
});
