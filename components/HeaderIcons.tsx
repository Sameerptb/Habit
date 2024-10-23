import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const HeaderIcons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton}>
        <Image
          source={require('../assets/icons/menu.png')}
          style={styles.icon1}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.rightButton}>
        <Image
          source={require('../assets/icons/Profile.png')}
          style={styles.icon2}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top:30,
    height:80,

  },
  menuButton: {
    position: 'absolute',
    left: 20,
  },
  rightButton: {
    position: 'absolute',
    right: 20,
  },
  icon1: {
    width: 32,
    height: 32,
  },
  icon2: {
    width: 46,
    height: 46,
  },
});

export default HeaderIcons;
