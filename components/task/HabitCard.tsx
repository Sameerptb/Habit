import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../Button';

const HabitCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topCard}>
        <View style={styles.calenderShadow}>
          <View style={styles.calenderBackground}>
            <Image source={require('../../assets/icons/calendar1.png')} style={{ height: 30, width: 30, alignSelf: 'center' }} />
          </View>
        </View>
        <View style={styles.dateText}>
          <Text style={styles.topText}>Date and Time</Text>
          <Text style={styles.dayText}>28 Jul, 2020</Text>
        </View>
      </View>
      <View style={styles.bottomCard}>
        <Text style={styles.bottomText}>Goal Previews</Text>
        <View style={styles.progressContainer}>
          <Image source={require('../../assets/images/progressimg.png')} style={{ width: 108, height: 91, marginRight: 90 }} style={styles.progressImage} />
          <Button 
          icon={require('../../assets/icons/work-in-progress-2 1.png')}
          buttonText={'   progrss task: 80%'}
          size={{ width: 165, height: 45 }}
          />
        </View>
        <Button 
        buttonText={'Complete Task'}
        textColor={'black'}
        size={{ width: 158, height: 42 }}
        backgroundColor={'#BAEEFF'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 342,
    height: 355,
    borderRadius: 45,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  topCard: {
    flexDirection: 'row',
    width: '100%',
    height: 101,
    backgroundColor: '#BAEEFF',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  calenderShadow: {
    height: 64,
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#DEDEDE', 
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 5,
    shadowRadius: 6,
    elevation: 6,
    marginLeft: 25,
  },
  calenderBackground: {
    height: 64,
    width: 64,
    borderRadius: 50,
    backgroundColor: '#F0F0F0', 
    justifyContent: 'center',
  },
  dateText: {
    alignItems: 'center',
    marginLeft: 30,
    gap: 5,
  },
  dayText: {
    fontFamily:'roboto',
    color: '#2C2C2CB2',
    fontSize: 12,
    fontWeight: '400',
    marginRight: 23,
  },
  bottomCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  topText: {
    fontFamily:'roboto',
    fontSize: 14,
    fontWeight: '400',
    color: '#131313',
  },
  bottomText: {
    fontFamily:'roboto',
    fontSize: 24,
    fontWeight: '500',
    color: '#444444',
    alignSelf: 'flex-start',
    top: -30,
    marginLeft: 25,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start',
    marginRight: 10,
    bottom:20,
    zIndex: 1,
  },
  progressImage: {
    width: 108,
    height: 95,
    marginRight: 10,
  },

});

export default HabitCard;
