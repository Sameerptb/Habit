import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types'; 
import Button from '../Button';

const ListUpcoming = ({ 
  title, 
  habitImage, 
  cardColor, 
  buttonColor, 
  buttonText, 
  onButtonPress, 
  backImage, 
  backImageSize,
}) => {
  return (
    
    <View style={styles.container}>
      <View style={[styles.listContainer, { backgroundColor: cardColor }]}>
        <View style={styles.imageContainer}>
          <Image 
            source={backImage}
            style={[styles.backImage, { width: backImageSize.width, height: backImageSize.height }]}
          />
          <Image 
            source={habitImage}
            style={styles.image}
            accessibilityLabel={title} 
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
  listContainer: {
    padding: 20,
    width: 157,
    flexDirection: 'column',
    height: 173,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 27,
  },
  imageContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center', 
    width: '100%', 
    height: 74, 
  },
  backImage: {
    position: 'absolute', 
    zIndex: 1,
    width:'100%',
    height:'100%',
    resizeMode:'stretch',
  },
  image: {
    width: 54,
    height: 54,
    zIndex: 2,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily:'Arial',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
});

// Prop validation
ListUpcoming.propTypes = {
  title: PropTypes.string.isRequired,
  habitImage: PropTypes.number.isRequired, 
  cardColor: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  onButtonPress: PropTypes.func.isRequired,
  backImage: PropTypes.number.isRequired,
  backImageSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

export default ListUpcoming;
