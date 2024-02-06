import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const History = ({ route }) => {
  const { history } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculation History</Text>

      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.historyItem}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyItem: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default History;