import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types'; 
import Button from './Button';

const ListCard = ({ title, habitImage, time, cardColor, buttonColor, buttonText, onButtonPress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.listContainer, { backgroundColor: cardColor, shadowColor: buttonColor }]}>
        <Image 
          source={habitImage}
          style={styles.image}
          accessibilityLabel={title} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        
        <Button 
          onPress={onButtonPress} 
          textColor={buttonColor} 
          buttonText={buttonText} 
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop:-10,
  },
  listContainer: {
    padding: 20,
    width: 314,
    flexDirection: 'row',
    height: 85,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 27,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 54,
    height: 54,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  time: {
    fontSize: 11,
    fontWeight: '400',
    textAlign: 'center',
  },
});

// Prop validation
ListCard.propTypes = {
  title: PropTypes.string.isRequired,
  habitImage: PropTypes.number.isRequired, 
  time: PropTypes.string.isRequired,
  cardColor: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  onButtonPress: PropTypes.func.isRequired,
};

export default ListCard;
