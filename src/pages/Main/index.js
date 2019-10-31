import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';
import { Container, Form, Input, SubmintButton } from './styles';

export default function Main() {
  return (
    <>
      <Container>
        <Text>hello</Text>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
          />
          <SubmintButton>
            <Icon name="add" size={20} color="#fff" />
          </SubmintButton>
        </Form>
      </Container>
    </>
  );
}
Main.navigationOptions = {
  title: 'Usuários',
};
