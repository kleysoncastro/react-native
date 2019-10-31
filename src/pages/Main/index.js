import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Form, Input, SubmintButton } from './styles';

export default function Main() {
  return (
    <>
      <Container>
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
