//화면을 확인하기 위한 text와 다음 화면인 list화면으로
//이동하기 위한 버튼으로 화면을 구성했다.
import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const items = [
  { _id: 1, name: 'React Native' },
  { _id: 2, name: 'React Navigation' },
  { _id: 3, name: 'Hanbit' },
];

const List = ({ navigation }) => {
  const _onPress = (item) => {
    navigation.navigate('Item', { id: item._id, name: item.name });
  };
//id와 name을 함께 전달하도록 작성했다.

  return (
    <Container>
      <StyledText>List</StyledText>
      {items.map((item) => (
        <Button
          key={item._id}
          title={item.name}
          onPress={() => _onPress(item)}
        />
      ))}
    </Container>
  );
};

export default List;
