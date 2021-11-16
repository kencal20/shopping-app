import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image
        source={require("./logo.png")}
        style={{ height: 550, width: 400 ,
        marginTop:20}}
      />
      <TouchableOpacity
        style={{ backgroundColor: "blue", padding: 20, borderRadius: 40 ,
      marginTop:50}}
      >
        <Text style={{ fontSize: 27, color: "#fff" }}>Select</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
