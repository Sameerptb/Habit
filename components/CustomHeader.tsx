import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const CustomHeader = ({ leftIcon, rightIcon, onLeftPress, onRightPress, iconSize, tintColor }) => {
  return (
    <View style={styles.headerContainer}>
      {leftIcon && (
        <TouchableOpacity onPress={onLeftPress}>
          <Image
            source={leftIcon}
            style={[styles.icon1, iconSize, { tintColor }]} 
          />
        </TouchableOpacity>
      )}
      {rightIcon && (
        <TouchableOpacity onPress={onRightPress}>
          <Image
            source={rightIcon}
            style={styles.icon2}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};


export default CustomHeader;

const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
    },
    icon1: {
      width: 32,
      height: 32,
    },
    icon2: {
      width: 46,
      height: 46,
      resizeMode:'contain',
    },
});
