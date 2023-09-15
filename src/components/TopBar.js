import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';

import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import moment from 'moment';

import store from '../state/store';
import { changeSelectedTodoDate } from '../state/features/todoSlice';

export default function TopBar({ navigation, rightIcon }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const changedTodoDate = store.getState();
      setSelectedDate(changedTodoDate.todoDate.selectedTodoDate);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.topBar}>
      <View style={styles.topBarLeft}>
        <Text style={styles.topBarDateText}>
          {moment(selectedDate).format('dddd, MMM D')}
        </Text>
        <Text style={styles.topBarHeading}>Todo List</Text>
      </View>

      {rightIcon == 'Calendar' && (
        <Pressable onPress={() => navigation.navigate('Calendar')}>
          <FontAwesome5 name="calendar-alt" size={30} color="black" />
        </Pressable>
      )}

      {rightIcon == 'Back' && (
        <Pressable onPress={() => navigation.popToTop()}>
          <Feather name="arrow-right-circle" size={30} color="black" />
        </Pressable>
      )}

      <View style={styles.topBarRight}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  topBarLeft: {
    width: '70%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  topBarDateText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#686866',
  },
  topBarHeading: {
    fontFamily: 'Rubik-Bold',
    fontSize: 30,
  },
});
