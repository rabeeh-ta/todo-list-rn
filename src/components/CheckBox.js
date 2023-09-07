import { View, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function CheckBox({ checked, onClickHandler, id }) {
  if (checked) {
    return (
      <Pressable onPress={() => onClickHandler(id)}>
        <View style={styles.checkBoxChecked}>
          <FontAwesome name="check" size={16} color="white" />
        </View>
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={() => onClickHandler(id)}>
        <View style={styles.checkBox}></View>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  checkBox: {
    borderColor: '#686866',
    borderWidth: 2,
    padding: 3,
    marginRight: 10,
    height: 25,
    width: 25,
    borderRadius: 25,
  },
  checkBoxChecked: {
    borderColor: '#686866',
    borderWidth: 2,
    padding: 3,
    marginRight: 10,
    height: 25,
    width: 25,
    borderRadius: 25,
    backgroundColor: '#E2A013',
  },
});
