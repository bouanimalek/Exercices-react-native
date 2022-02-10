import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Exemple from "./Exemple";

export default function App() {
  return (
    <View style={styles.container}>
      <Exemple />
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
