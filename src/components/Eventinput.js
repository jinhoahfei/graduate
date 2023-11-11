import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';

const EventInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  return (
    <View>
      <Text>Input Value: {inputValue}</Text>
      <TextInput
        placeholder="Type something..."
        onChangeText={handleInputChange}
        value={inputValue}
        style={{ borderWidth: 1, padding: 10, margin: 10 }}
      />
    </View>
  );
};

export default EventInput;