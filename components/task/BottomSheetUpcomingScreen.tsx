import { StyleSheet, Text, Dimensions, View } from 'react-native';
import React, { useEffect } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import Data from '../../src/constants/Data';
import ListUpcoming from '../../components/task/ListUpcoming';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

const BottomSheet = () => {
  const translateY = useSharedValue(0);
  const contex = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      contex.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + contex.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    });

  useEffect(() => {
    translateY.value = withSpring(-SCREEN_HEIGHT / 1.7, { damping: 50 });
  }, []);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate('Upcoming');
  };

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
          <Text style={styles.textStyle}>List Habits</Text>
          <View style={styles.listContainer}>
            {Data.map((item) => (
              <View key={item.id} style={styles.itemContainer}>
                <ListUpcoming
                  title={item.title}
                  backImage={item.backImage}
                  backImageSize={item.backImageSize}
                  habitImage={item.habitImage}
                  cardColor={item.cardColor}
                  buttonText={item.buttonText}
                  buttonColor={item.buttonColor}
                  onButtonPress={handleButtonPress}
                />
              </View>
            ))}
          </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 45,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 15,
  },
  textStyle: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 24,
    fontWeight: '500',
    marginTop: 15,
    padding: 10,
    marginBottom: -20,
    left: 10,
    color:'#444444',
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemContainer: {
    width: '48%',
    marginBottom: 160,
  },
});
