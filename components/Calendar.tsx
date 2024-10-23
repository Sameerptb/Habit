import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState('9');
  const [currentMonth, setCurrentMonth] = useState(11);
  const [currentYear, setCurrentYear] = useState(2020);
  
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const generateDaysArray = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const daysArray = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const dayLabel = weekDays[date.getDay()];
      daysArray.push({ day: day.toString(), label: dayLabel });
    }
    
    return daysArray;
  };

  const [days, setDays] = useState(generateDaysArray());

  useEffect(() => {
    setDays(generateDaysArray());
  }, [currentMonth, currentYear]);

  const changeMonth = (direction) => {
    setCurrentMonth((prevMonth) => {
      let newMonth = prevMonth + direction;

      if (newMonth > 11) {
        setCurrentYear((prevYear) => prevYear + 1);
        newMonth = 0;
      } else if (newMonth < 0) {
        setCurrentYear((prevYear) => prevYear - 1);
        newMonth = 11;
      }

      return newMonth;
    });
  };

  const renderDay = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.dayContainer,
        selectedDay === item.day && styles.selectedDayContainer,
      ]}
      onPress={() => setSelectedDay(item.day)}
    >
      <View style={styles.dayWrapper}>
        <Text style={[styles.dayText, selectedDay === item.day && styles.selectedDayText]}>
          {item.day}
        </Text>
      </View>

      <Text style={[styles.dayLabel, selectedDay === item.day && styles.selectedDayLabel]}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeMonth(-1)}>
          <Image source={require('../assets/icons/down-arrow.png')} style={styles.monthNav}/>
        </TouchableOpacity>
        <Text style={styles.monthText}>
          {new Date(currentYear, currentMonth).toLocaleString('en-US', { month: 'long' })}, {currentYear}
        </Text>
        <TouchableOpacity onPress={() => changeMonth(1)}>
          <Image source={require('../assets/icons/down-arrow-right.png')} style={styles.monthNav}/>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={days}
        renderItem={renderDay}
        keyExtractor={(item) => item.day}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    top: 290,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  monthText: {
    fontFamily:'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    color:'#444444',
  },
  monthNav: {
    width: 21,
    height: 21,
    resizeMode: 'contain',
    paddingHorizontal: 70,
  },
  dayContainer: {
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 30,
  },
  selectedDayContainer: {
    width: 52,
    backgroundColor: '#3D3D3D',
    borderRadius: 60,
    height: 86,
  },
  dayWrapper: {
    backgroundColor: 'white',
    height: 30,
    width: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayLabel: {
    fontWeight: '600',
    color: '#60BFD3',
    fontSize: 12,
    paddingTop: 15,
  },
  dayText: {
    fontWeight: '500',
    color: '#000000',
    fontSize: 12,
  },
});

export default Calendar;
