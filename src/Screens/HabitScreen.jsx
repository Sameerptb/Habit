import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, SafeAreaView } from 'react-native';
import HabitCard from '../../components/task/HabitCard';

const HabitScreen = ({ route }) => {
  const { content, time, habitImage, plantImage, foregroundColor } = route.params;

  return (
     <View style={[styles.container, { backgroundColor: foregroundColor }]}>
      
      <StatusBar barStyle="light-content" backgroundColor={foregroundColor} />
      <Text style={styles.title}>{content}</Text>
      
      <View style={styles.imageContainer}>
        <Image style={styles.plantImage} source={plantImage} />
        <Image style={styles.habitImage} source={habitImage} />
        <Image style={styles.flowerpotImage} source={require('../../assets/images/flower-pot 1.png')} />
      </View>

      <View style={styles.cardContainer}>
        <HabitCard />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily:'roboto',
    fontSize: 30,
    fontWeight: '500',
    color: 'white',
    top:-20,
    zIndex:2,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between', 
    width: '100%', 
    paddingHorizontal: 20, 
    marginVertical: 20, 
    position:'relative',
  },
  habitImage: {
    width: 286,
    height: 327,
    position: 'absolute', 
    left: '52%', 
    transform: [{ translateX: -143 }],
    top:-54,
    zIndex: 1,
  },
  plantImage: {
    width: 118.9,
    height: 233.41,
    left:-5,
    top:40,
    zIndex: 2,
  },
  flowerpotImage:{
    width: 102,
    height: 102,
    right:5,
    top:95,
    zIndex: 2,
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30, 
    zIndex:3
  },
});

export default HabitScreen;