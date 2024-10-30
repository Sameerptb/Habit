import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TasksScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tasks</Text>
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
    fontFamily:'Arial',
    fontWeight:'700',
    fontSize: 20,
  },
});

export default TasksScreen;
