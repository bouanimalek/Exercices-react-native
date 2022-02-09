import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const obj = [
    { name: "Stan", age: 45 },
    { name: "Francine", age: 45 },
    { name: "Hayley", age: 18 },
    { name: "Steve", age: 14 },
    { name: "Roger", age: 1020 },
    { name: "Klaus", age: 35 },
  ];
  const [family, setFamily] = useState(obj);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.list}>
        <Text style={styles.textList}>
          Nom: {item.name} | Age: {item.age}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={family}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
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
    padding: 12,
    fontSize: 40,
  },
});
