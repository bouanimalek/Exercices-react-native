import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const obj = [
    { id: 1, name: "Stan", age: 45 },
    { id: 2, name: "Francine", age: 45 },
    { id: 3, name: "Hayley", age: 18 },
    { id: 4, name: "Steve", age: 14 },
    { id: 5, name: "Roger", age: 1020 },
    { id: 6, name: "Klaus", age: 35 },
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
        keyExtractor={(item) => item.id}
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
