import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';

const Laskin = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const addNumbers = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    const operation = `${num1} + ${num2} = ${sum}`;
    setResult(`Result: ${sum}`);
    setHistory([...history, operation]);
  };

  const subtractNumbers = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    const operation = `${num1} - ${num2} = ${difference}`;
    setResult(`Result: ${difference}`);
    setHistory([...history, operation]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.result}>{result}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter number 1"
        value={num1}
        onChangeText={(text) => setNum1(text)}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter number 2"
        value={num2}
        onChangeText={(text) => setNum2(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={addNumbers} />
        <Button title="-" onPress={subtractNumbers} />
      </View>

      <Text style={styles.historyTitle}>Historia</Text>

      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 200,
  },
  result: {
    marginBottom: 5,
    fontSize: 18,
  },
  historyTitle: {
    marginTop: 10,
    fontSize: 20,
  
  },
});

export default Laskin;