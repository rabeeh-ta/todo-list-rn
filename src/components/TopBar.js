import { 
    StyleSheet, 
    Text, 
    View,
    Pressable
 } from 'react-native'
import React from 'react'

import { FontAwesome5 } from '@expo/vector-icons';

export default function TopBar({navigation,heading,subHeading}) {
  return (
    <View style={styles.topBar}>
    <View style={styles.topBarLeft}>
      <Text style={styles.topBarDateText}>
        {subHeading}
      </Text>
      <Text style={styles.topBarHeading}>{heading}</Text>
    </View>
    <Pressable onPress={()=> navigation.navigate("Calendar")}>
<FontAwesome5 name="calendar-alt" size={30} color="black"  />

    </Pressable>
   
    <View style={styles.topBarRight}></View>
  </View>
  )
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
     
})