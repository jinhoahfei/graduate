
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const MyButton = () => {
  return (
    <TouchableOpacity
    style={{
    backgroundColor: '#3498db',
    padding: 16,
    margin: 10,
    borderRadius: 8,
    }}
    onPress={()=>alert('Click !!!')}
    >
      <Text style={{ color: 'white', fontSize: 24 }}>MyButton</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

//안드로이드와 ios에 각각 다르게 나오는데
//그걸 상호작용할수 있도록 만들었다.
