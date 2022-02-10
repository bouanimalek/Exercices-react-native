import { TextInput, StyleSheet, Keyboard } from "react-native";
import React, { useEffect } from "react";

const Exemple = () => {
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
  }, []);

  const _keyboardDidShow = () => {
    alert("Veuillez remplir le TextInput");
  };

  const _keyboardDidHide = () => {
    alert("Merci d'avoir valider le TextInput");
  };

  return <TextInput style={styles.input} onSubmitEditing={Keyboard.dismiss} />;
};
export default Exemple;

const styles = StyleSheet.create({
  input: {
    margin: 60,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 0.4,
    backgroundColor: "#fff",
  },
});
