import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Button = ({ onPress, textColor, icon, buttonText, size, backgroundColor }) => {
  const buttonSize = size || { width: 70, height: 27 };
  const buttonBgColor = backgroundColor || 'white';

  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: buttonBgColor, width: buttonSize.width, height: buttonSize.height }]} 
      onPress={onPress}
    >
      {icon && <Image source={icon} style={styles.icon} />}
      <Text style={[styles.text, { color: textColor }]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 27,
    padding: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 3,
  },
  text: {
    fontFamily:'roboto',
    fontSize:11,
    fontWeight:'600',
    bottom: 1.5,
    resizeMode: 'contain',
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default Button;
