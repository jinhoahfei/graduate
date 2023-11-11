import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
//home header화면을 가림으로써 노치 디자인 문제로
//화면의 일부가 가려지는 문제를 해결함.
const Container = styled.SafeAreaView`

  background-color: #ffffff;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;
const Home = ({ navigation }) => {
  return (
    <Container>
      <StyledText>Home</StyledText>
      <Button
        title="Go to the list screen"
        onPress={() => navigation.navigate('List')}
      />
    </Container>
  );
};

export default Home;
