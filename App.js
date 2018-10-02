import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const data = require("./ass2data.json");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gotData: false,
      concerts: []
    };
  }

  componentDidMount() {
    this.setState({ gotData: true, concerts: data });
  }

  renderConcerts = concerts => {
    return concerts.map((concert, index) => {
      return (
        <View key={index}>
          <Text>{concert.name.first_name}</Text>
        </View>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {!this.state.gotData ? (
          <ActivityIndicator size="large" />
        ) : (
          this.renderConcerts(this.state.concerts)
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
