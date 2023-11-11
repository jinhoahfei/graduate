//list화면으로 사용될 컴포넌트 작성
//항복수만큼 버튼을 생성하도록 만들었다.
//임시데이터를 만들것이다.

import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;
//route를 통해 리스트로부터 받은 데이터를 전달한다.
const Item = ({ route }) => {
  return (
    <Container>
      <StyledText>Item</StyledText>
      <StyledText>ID: {route.params.id}</StyledText>
      <StyledText>Name: {route.params.name}</StyledText>
    </Container>
  );
};

export default Item;



