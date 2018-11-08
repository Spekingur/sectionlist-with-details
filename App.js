// (c) 2018
// Hreidar Olafur Arnarsson, hreidara14@ru.is
// Maciej Sierzputowski, maciej15@ru.is

import React from 'react';
import {
  ActivityIndicator, SectionList, StyleSheet, Text, View,
} from 'react-native';
import { Constants } from 'expo';
// import { ScrollView } from 'react-native-gesture-handler';

// const data = require('./ass2data.json');
import data from './ass2data';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 16,
  },
  concertContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 16,
  },
  infoContainer: {
    paddingLeft: 8,
    justifyContent: 'space-around',
    flex: 1,
  },
  text: {
    fontSize: 14,
    fontFamily: 'space-mono',
  },
  list: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'grey',
    paddingLeft: 5,
  },
  item: {
    fontSize: 14,
    paddingLeft: 5,
  },
});

// First sort
// Then create a dictionary and push the whole object to its relevant place
const sortedDict = data
  .sort((a, b) => a.name.first_name.localeCompare(b.name.first_name))
  .reduce((dict, obj) => {
    const firstLetter = obj.name.first_name.charAt(0);
    const dicted = dict;
    if (!dicted[firstLetter]) {
      dicted[firstLetter] = [];
    }
    dicted[firstLetter].push(obj);
    return dicted;
  }, []);

// Finally structure the data in a way that sectionlist wants
const sectArr = Object.keys(sortedDict).map(letterkey => ({
  title: letterkey,
  data: sortedDict[letterkey],
}));

console.log(sortedDict);
console.log(sectArr);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gotData: false,
      concerts: [],
    };
  }

  componentDidMount() {
    this.setState({ gotData: true, concerts: data });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Contacts</Text>
        </View>
        {!this.state.gotData ? (
          <ActivityIndicator size="large" />
        ) : (
          <SectionList
            style={styles.list}
            ListFooterComponent={() => <ActivityIndicator size="small" />}
            renderItem={({ item, index }) => (
              <Text style={styles.item} key={index}>
                {item}
              </Text>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title.name.first_name}</Text>
            )}
            sections={sectArr}
            keyExtractor={(item, index) => item + index}
          />
        )}
      </View>
    );
  }
}
