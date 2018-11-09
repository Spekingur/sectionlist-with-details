// (c) 2018
// Hreidar Olafur Arnarsson, hreidara14@ru.is
// Maciej Sierzputowski, maciej15@ru.is

import React from 'react';
import {
  StyleSheet, Button, Text, View, Image,
} from 'react-native';
import { Constants } from 'expo';

import Homescreen from './components/HomeScreen';
import Workscreen from './components/WorkScreen';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // backgroundColor: '#f09',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight,
    padding: 30,
  },
  text: {
    // color: 'white',
    fontSize: 24,
  },
  avatarImg: {
    height: 200,
    width: 200,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  imgStyle: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  nameSpace: {
    flexDirection: 'row',
  },
  screenContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  buttonStyle: {
    borderRadius: 100,
  },
});

const currentPerson = this.props;

const name = {
  firstname: currentPerson.name.first_name,
  lastname: currentPerson.name.last_name,
};

const pic = {
  uri: currentPerson.avatar,
};

export default class DetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onHomeScreen: true,
    };
  }

  render() {
    const { onHomeScreen } = this.state;
    return (
      <View style={styles.appContainer}>
        <View style={styles.imgStyle}>
          <Image style={styles.avatarImg} source={pic} />
        </View>

        <View style={styles.nameSpace}>
          <Text style={styles.text}>
            {name.firstname}
            {' '}
            {name.lastname}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonStyle}
            title={onHomeScreen ? 'Show work info' : 'Show home info'}
            onPress={() => this.setState({ onHomeScreen: !onHomeScreen })}
          />
        </View>

        <View style={styles.screenContainer}>
          {onHomeScreen ? (
            <Homescreen homeInfo={currentPerson.home} />
          ) : (
            <Workscreen workInfo={currentPerson.work} />
          )}
        </View>
      </View>
    );
  }
}
