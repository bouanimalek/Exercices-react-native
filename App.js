import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const obj = [
    { id: 1, name: "Stan", age: 45 },
    { id: 2, name: "Francine", age: 45 },
    { id: 3, name: "Hayley", age: 18 },
    { id: 4, name: "Steve", age: 14 },
    { id: 5, name: "Roger", age: 1020 },
    { id: 6, name: "Klaus", age: 35 },
  ];

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({});
