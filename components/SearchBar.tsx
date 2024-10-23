import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {AntDesign} from "@expo/vector-icons";

const SearchBar = ({ value, onChangeText, onSubmitEditing }) => {
    return (
      <View style={styles.container}>
        <AntDesign name="search1" size={24} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search your task..."
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      width:314,
      height:41,
      margin: 20,
      borderRadius: 30,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.5,
      elevation: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      paddingHorizontal: 15,
    },
    input: {
      height: 50,
      borderRadius: 30,
      paddingHorizontal: 10,
      fontSize: 16,
      flex: 1,
    },
  });
  
  export default SearchBar;