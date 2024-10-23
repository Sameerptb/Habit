import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeCard = ({ foregroundColor, content, time, habitImage, plantImage, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, { backgroundColor: foregroundColor }]}>
    <View style={[styles.card, { backgroundColor: foregroundColor }]}>
      <Text style={styles.content}>{content}</Text>
      <Text style={styles.description}>{time}</Text>
      <View style={styles.imagesContainer}>
      <Image style={styles.progressBar} source={require('../../assets/images/Export%.png')} />
      <Image style={styles.plantImage} source={plantImage} />
      <Image style={styles.habitImage} source={habitImage} />
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    
    width: 314,
    height: 185,
    borderRadius: 27,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3, 
    overflow:'hidden',
    position:'relative',
  },
  content: {
    fontFamily:'arial',
    fontSize: 16,
    fontWeight: '700',
    top:110,
    right:65,
    resizeMode:'contain',
    color:'white',
  },
  description: {
    fontFamily:'arial',
    fontSize: 14,
    fontWeight:'400',
    right:84,
    resizeMode:'contain',
    color:'white',
    top:115,
  },
  habitImage:{
    width: 188, 
    height: 222, 
    position: 'absolute', 
    left:132, 
    bottom:-18, 
    resizeMode: 'contain',
  },
  plantImage:{
    width:94,
    height:133,
    rotation:0,
    transform: [{ rotate: '180deg' }, {scaleX: -1}],
    right:85,
    bottom:50,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
    resizeMode:'contain',
  },
  progressBar:{
    width:55,
    height:55,
    bottom:20,
    right:20,
    resizeMode:'contain',
  }
});

export default HomeCard;
