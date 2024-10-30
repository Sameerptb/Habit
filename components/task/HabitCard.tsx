import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../Button';
import CircularProgressBas from '../CircularProgressBas';
import { ProgressContext } from '../ProgressContext';

const HabitCard = ({ onCompleteTask, id }) => {
  const { progressValues, setProgressValue } = useContext(ProgressContext);

  const handleTaskProgress = () => {
    const newProgress = Math.min(progressValues[id] + 10, 100);
    setProgressValue(id, newProgress);
  };

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
          <View style={styles.progressImage}>
            <CircularProgressBas value={progressValues[id]} outerRadius={52} innerRadius={41} colors={{ outer: '#FF81AE', inner: '#45D1FF' }} />
          </View>
          <Button
            icon={require('../../assets/icons/work-in-progress-2 1.png')}
            buttonText={`   Progress Task: ${progressValues[id]}%`}
            size={{ width: 165, height: 45 }}
            onPress={handleTaskProgress}
            textStyle={{
              fontFamily: 'Roboto_400Regular',
              fontSize: 12,
              fontWeight: '400',
            }}
            textColor={'#3A3A3A'}
          />
        </View>
        <Button
          buttonText={'Complete Task'}
          textColor={'#151515'}
          size={{ width: 158, height: 42 }}
          backgroundColor={'#BAEEFF'}
          onPress={onCompleteTask}
          textStyle={{
            fontFamily: 'Arial',
            fontSize: 14,
            fontWeight: '500',
          }}
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
    fontFamily: 'Roboto_400Regular',
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
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    fontWeight: '400',
    color: '#131313',
  },
  bottomText: {
    fontFamily: 'Roboto_500Medium',
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
    justifyContent: 'flex-start',
    marginRight: 10,
    bottom: 20,
    zIndex: 1,
  },
  progressImage: {
    width: 120,
    height: 110,
    marginRight: 10,
  },
});

export default HabitCard;
