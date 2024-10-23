import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import HabitsScreen from './HabitsScreen';
import TasksScreen from './TasksScreen';

const ToggleSwitch = () => {
  const [activeButton, setActiveButton] = useState('habits');

  const toggle = () => {
    setActiveButton((prev) => (prev === 'habits' ? 'tasks' : 'habits'));
  };

  return (
    <View style={styles.container}>
      {/* Background screens */}
      {activeButton === 'habits' ? <HabitsScreen /> : <TasksScreen />}

      {/* Switch container */}
      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            styles.habitsButton,
            activeButton === 'habits' && styles.activeButton,
            activeButton === 'habits' ? styles.activeButtonZIndex : {},
          ]}
          onPress={toggle}
        >
          <Image
            source={require('../assets/icons/repeat-button.png')}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Habits</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            styles.tasksButton,
            activeButton === 'tasks' && styles.activeButton,
            activeButton === 'tasks' ? styles.activeButtonZIndex : {},
          ]}
          onPress={toggle}
        >
          <Image
            source={require('../assets/icons/taskIcon.png')}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Tasks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  switchContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    position: 'absolute',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDFDFD',
    borderRadius: 27,
  },
  habitsButton: {
    width: 158,
    left: 50,
  },
  tasksButton: {
    width: 158,
    left: '45%',
  },
  activeButton: {
    backgroundColor: '#BAEEFF',
  },
  activeButtonZIndex: {
    zIndex: 3,
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 8,
  },
  buttonText: {
    fontFamily: 'arial',
    fontWeight: '400',
    fontSize: 13,
    color: '#272727',
  },
});

export default ToggleSwitch;
