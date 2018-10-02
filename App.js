import React from "react";
import {
  ActivityIndicator,
  SectionList,
  StyleSheet,
  Text,
  View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const data = require("./ass2data.json");

//Function for alphabetical sorting
data.sort(function(a, b) {
  if (a.name.first_name < b.name.first_name) return -1;
  if (a.name.first_name > b.name.first_name) return 1;
  return 0;
});

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

  getNamesBeginningWith(a) {
    let i = 0;
    let grad = [];
    while (this.state.concerts[i].name.first_name.startsWith(a)) {
      grad.push(this.state.concerts[i]);
      i += 1;
    }
    console.log(grad);
    return grad;
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
      <ScrollView contentContainerStyle={styles.container}>
        {!this.state.gotData ? (
          <ActivityIndicator size="large" />
        ) : (
          <SectionList
            renderItem={({ item, index, section }) => (
              <Text key={index}>{item}</Text>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={{ fontWeight: "bold" }}>{title}</Text>
            )}
            sections={[
              {
                title: "A",
                data: [this.getNamesBeginningWith("A")]
              },
              { title: "B", data: [this.getNamesBeginningWith("B")] },
              { title: "C", data: ["item5", "item6"] }
            ]}
            keyExtractor={(item, index) => item + index}
          />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16
  },
  concertContainer: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 16
  },
  infoContainer: {
    paddingLeft: 8,
    justifyContent: "space-around",
    flex: 1
  },
  text: {
    fontSize: 14,
    fontFamily: "space-mono"
  }
});
