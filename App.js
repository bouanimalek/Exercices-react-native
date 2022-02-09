import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from "react-native";

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
  // refreshControll
  const [refreshing, setRefreshing] = useState(false);
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  };
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {family.map((member) => {
          return (
            <View key={member.id} style={styles.list}>
              <Text style={styles.textList}>
                Nom: {member.name} | Age: {member.age}
              </Text>
            </View>
          );
        })}
      </ScrollView>
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
