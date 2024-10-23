import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import ListCard from '../ListCard';
import { useNavigation } from '@react-navigation/native';



const {height: SCREEN_HEIGHT} = Dimensions.get('window')
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;
const BottomSheet = ({ item }) => {
  const translateY = useSharedValue(0)

  const contex = useSharedValue({y:0})
  const gesture =Gesture.Pan().onStart(() => {
    contex.value = { y: translateY.value }
  }).onUpdate((event) => {
    translateY.value = event.translationY + contex.value.y;
    translateY.value = Math.max(translateY.value,MAX_TRANSLATE_Y )
    
  });

  useEffect(() => {
    translateY.value = withSpring(-SCREEN_HEIGHT / 2.5, { damping:50 })
  }, [])

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return{
      transform: [{translateY: translateY.value}]
    }
  })

  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate('Upcoming');
  };
  
  return  (
    <GestureDetector gesture={gesture}>
  <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
    <View style={styles.line} />
    <Text style={styles.textStyle}>On going goals</Text>
    
    <ListCard
          title={item.title}
          habitImage={item.habitImage}
          time={item.time}
          cardColor={item.cardColor}
          buttonText={item.buttonText}
          buttonColor={item.buttonColor}
          onButtonPress={handleButtonPress}
        />
  
  </Animated.View>
  </GestureDetector>
)}

export default BottomSheet

const styles = StyleSheet.create({
  bottomSheetContainer:{
    height:SCREEN_HEIGHT,
    width:'100%',
    backgroundColor:'white',
    position:'absolute',
    top:SCREEN_HEIGHT,
    borderRadius:45,
  },
  line:{
    width:50,
    height:4,
    backgroundColor:'#C5C5C5B2',
    alignSelf:'center',
    marginVertical:15,
    borderRadius:2,
  },
  textStyle:{
    fontSize:17,
    fontWeight:'700',
    position:'relative',
    marginLeft:40,
    marginTop:-5,
    padding:10,
  },
})