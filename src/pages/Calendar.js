import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import store from '../state/store';
import { changeSelectedTodoDate } from '../state/features/todoSlice';

import TopBar from '../components/TopBar';

export default function CalendarPage({ navigation }) {
  const [selected, setSelected] = useState();

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <TopBar
        navigation={navigation}
        rightIcon={'Back'}
      ></TopBar>

      <View style={styles.calendarDiv}>
        <Calendar
          theme={styles.calendarTheme}
          onDayPress={(day) => {
            setSelected(day.dateString);
            store.dispatch(changeSelectedTodoDate( day.timestamp))
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: '#EDEDEB',
  },
  calendarDiv: {
    marginHorizontal: 30,
  },

  calendarTheme: {
    calendarBackground: '#EDEDEB',
    textSectionTitleColor: '#686866',
    selectedDayBackgroundColor: '#E2A013',
    selectedDayTextColor: '#FFFFFF',
    todayTextColor: '#E2A013',
    dayTextColor: '#2d4150',
  },
});
