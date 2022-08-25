import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container1}>
      <Text>Visão inicial</Text>
      <View style={styles.container2}>
       <Text>Primeiro</Text>
        <View style={styles.container3}>
          <Text>Segundo</Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: 'steelblue',
    margin: 15,
    justifyContent: 'center',
    textAlign: 'center',
  },
  container2: {
    backgroundColor: 'peru',
    margin: 10,
  },
  container3: {
    backgroundColor: 'gray',
    margin: 5,
  }
});