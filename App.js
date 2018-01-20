import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home - Women In Computing'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Everyone</Text>
        <Button
          onPress={() => navigate('About')}
          title="About us"
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
