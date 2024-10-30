import { StyleSheet, View } from 'react-native';
import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';

const CircularProgressBar = ({ progressValue, width = 55, height = 55 }) => {
  return (
    <View style={{ width, height }}>
      <CircularProgress
        value={progressValue}
        radius={width / 2}
        activeStrokeColor={'#F1DC19'}
        inActiveStrokeColor={'#F1DC19'}
        inActiveStrokeOpacity={0.2}
        progressValueColor={'#fff'}
        valueSuffix={'%'}
        activeStrokeWidth={15}
        inActiveStrokeWidth={15}
        progressValueStyle={{ fontFamily: 'Arial', fontSize:14 }}
        rotation={180}
      />
    </View>
  );
};

export default CircularProgressBar;
