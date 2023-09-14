import { SafeAreaView } from 'react-native-safe-area-context';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  StatusBar,
} from 'react-native';
import { useFonts } from 'expo-font';
import moment from 'moment';

import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

import CheckBox from '../components/CheckBox';
import TopBar from '../components/TopBar';

import store from '../state/store';
import { changeSelectedTodoDate } from '../state/features/todoSlice';

export default function Home({ navigation }) {

  const [allTodos, setAllTodos] = useState([]);
  const [todo, setTodo] = useState('');



  const [fontsLoaded] = useFonts({
    'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'OpenSans-Regular': require('../../assets/fonts/OpenSan-Regular.ttf'),
    'Rubik-Bold': require('../../assets/fonts/Rubik-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  function addBtnHandler() {
    store.dispatch(changeSelectedTodoDate(moment().valueOf()))
    if (todo != '') {
      setAllTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            id: Number(Math.random().toString().slice(2)),
            done: false,
            content: todo,
          },
        ];
      });
      setTodo('');
    }
  }

  function doneTodo(id) {
    const newAllTodos = allTodos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          done: !todo.done,
        };
      } else {
        return todo;
      }
    });

    setAllTodos(newAllTodos);
  }

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <StatusBar style="light" backgroundColor="#000" />

      <View style={styles.container}>
        <TopBar
         
          navigation={navigation}
        
          rightIcon={'Calendar'}
       
        ></TopBar>

        <View style={styles.todoListBody}>
          <TextInput
            style={styles.todoInp}
            onChangeText={(text) => setTodo(text)}
            value={todo}
            placeholder="enter your todoo"
          />

      

          <ScrollView style={styles.todoListsDiv}>
            {allTodos.map((todo) => {
              return (
                <View style={styles.todoList} key={todo.id}>
                  <CheckBox
                    checked={todo.done}
                    onClickHandler={doneTodo}
                    id={todo.id}
                  />
                  <Text style={styles.todoListText}>{todo.content}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.footerContainer}>
          <Pressable style={styles.addTodoBtn}>
            <AntDesign
              name="plus"
              size={35}
              color="white"
              onPress={addBtnHandler}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: '#EDEDEB',
  },
  container: {
    flex: 1,
    backgroundColor: '#EDEDEB',
    alignItems: 'center',
  },
  todoListBody: {
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
    flex: 1,
    height: '100%',
  },
  todoInp: {
    height: 50,
    width: '80%',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    borderWidth: 2,
    borderBottomColor: 'black',
    padding: 5,
  },

  todoListsDiv: {
    marginTop: 20,
    width: '85%',
    height: '85%',
    flexDirection: 'column',
  },
  todoList: {
    padding: 7,
    paddingBottom: 12,
    margin: 5,
    borderBottomColor: '#C4C3BB',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoListText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    flexWrap: 'wrap',
  },
  footerContainer: {
    height: 80,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 30,
    alignItems: 'flex-end',
  },

  addTodoBtn: {
    height: 60,
    width: 60,
    borderRadius: 10,
    backgroundColor: '#0A0A0A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
