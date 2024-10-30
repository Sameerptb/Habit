import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';

const CircularProgressBas = ({ 
    value = 80, 
    outerRadius = 92, 
    innerRadius = 76, 
    colors = { outer: '#FF81AE', inner: '#45D1FF' } 
}) => {
    const commonProps = {
        activeStrokeWidth: 15,
        inActiveStrokeWidth: 15,
        inActiveStrokeOpacity: 0.1,
        rotation: 150,
        
    };

    return (
        <View style={styles.container}>
            <CircularProgressBase
                {...commonProps}
                value={value}
                maxValue={100}
                radius={outerRadius}
                activeStrokeColor={colors.outer}
                inActiveStrokeColor={colors.outer}
            >
                <CircularProgressBase
                    {...commonProps}
                    value={value}
                    maxValue={100}
                    radius={innerRadius}
                    activeStrokeColor={colors.inner}
                    inActiveStrokeColor={colors.inner}
                />
            </CircularProgressBase>
            
            
            <View style={[StyleSheet.absoluteFill, styles.center]}>
                <Text style={styles.progressLabel}>{value}%</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height:108,
        width:108,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressLabel: {
        fontSize: 24,
        fontWeight: '400',
        color: '#000',
        fontFamily:'Arial',
    },
});

export default CircularProgressBas;
