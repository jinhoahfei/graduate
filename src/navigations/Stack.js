//stack 네비게이션 생성
// 화면을 구성하는 screen component와 screen component
//를 관리하는 navigator 컴포넌트가 있다.
 //navigator컴포넌트 안에 screen 컴포넌트를 자식 컴포넌트로 작성한다.
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import List from '../screens/List';
import Item from '../screens/item';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
     screenOptions={{ cardStyle: {backgroundColor: '#ffffff' },
     headerTitleAlign: 'center',
     headerStyle:{
     height: 90,
     backgroundColor: '#95a5a6',
     borderBottomWidth: 5,
     borderBottomColor:'#34495e',
     }
     }}
    >
      <Stack.Screen name="Home"
      component={Home}
      options={{headerShown: false}}
      />
      <Stack.Screen
      name="List"
      component={List}
      options={{headerTitle: 'List Screen'}}
      />
      <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  );
};

export default StackNavigation;