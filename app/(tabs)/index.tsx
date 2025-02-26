import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur mon site !</Text>
      <Text style={styles.text}>Vous avez cliqué {count} fois</Text>
      <Button title="Cliquez-moi" onPress={() => setCount(count + 1)} color="#007bff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});
