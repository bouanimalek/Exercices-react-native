import React, { useState } from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";

export default function App() {
  const obj = [
    {
      role: "Père",
      data: ["Stan", 45],
    },
    {
      role: "Mère",
      data: ["Francine", 45],
    },
    {
      role: "Fille",
      data: ["hayley", 18],
    },
    {
      role: "Fils",
      data: ["Steve", 14],
    },
    {
      role: "Alien",
      data: ["Roger", 1020],
    },
    {
      role: "Poisson",
      data: ["Klaus", 30],
    },
  ];
  const [family, setFamily] = useState(obj);

  return (
    <View style={styles.container}>
      <SectionList
        sections={family}
        keyExtractor={(item, index) => index.toString()}
        renderSectionHeader={({ section }) => (
          <View style={styles.list}>
            <Text style={styles.textList}>{section.role}</Text>
          </View>
        )}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.textListData}>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    backgroundColor: "deepskyblue",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  textList: {
    color: "#fff",
    padding: 20,
    fontSize: 20,
  },
  textListData: {
    color: "grey",
    padding: 9,
    fontSize: 19,
    textAlign: "center",
  },
});
