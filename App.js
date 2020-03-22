import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.fonts}>whats up Codee?!</Text>
      <Text style={styles.fonts}>Sam stinks</Text>
      <View style={styles.container2}>
        <Text>lets get this thing started</Text>
      </View>
      <View style={styles.container3}>
        <Text>Quarantine time!</Text>
      </View>
      <View style={{ height: 200, width: 100 }}>
        <Text>Coding time!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#183693",
    alignItems: "center",
    justifyContent: "center"
  },
  container2: {
    flex: 1,
    backgroundColor: "#E50914",
    alignItems: "center",
    justifyContent: "center"
  },
  container3: {
    flex: 2,
    backgroundColor: "#E50914",
    alignItems: "center",
    justifyContent: "center"
  },
  fonts: {
    fontWeight: "900"
  },
  dimensions: {
    height: "10%",
    width: "50%"
  }
});
