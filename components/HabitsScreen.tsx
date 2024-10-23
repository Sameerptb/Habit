import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Calendar from './Calendar';

const HabitsScreen = () => {
  return (
    <View style={styles.container}>
      <Calendar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom:250
  },
  text: {
    fontSize: 20,
  },
});

export default HabitsScreen;
