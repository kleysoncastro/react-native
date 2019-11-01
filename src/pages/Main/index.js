import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Form,
  Input,
  SubmintButton,
  List,
  Avatar,
  User,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';
import api from '../../services/api';

export default class Main extends Component {
  state = { newUser: '', users: [] };

  hanleAddUser = async () => {
    const { users, newUser } = this.state;

    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };
    this.setState({
      users: [...users, data],
      newUser: '',
    });
    // recua teclado
    Keyboard.dismiss();
  };

  render() {
    const { users, newUser } = this.state;
    return (
      <>
        <Container>
          <Form>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Adicionar usuário"
              value={newUser}
              onChangeText={text => this.setState({ newUser: text })}
              returnKeyType="send"
              onSubmitEditing={this.hanleAddUser}
            />
            <SubmintButton onPress={this.hanleAddUser}>
              <Icon name="add" size={20} color="#fff" />
            </SubmintButton>
          </Form>

          <List
            data={users}
            keyExtractor={user => user.login}
            renderItem={({ item }) => (
              <User>
                <Avatar source={{ uri: item.avatar }} />
                <Name>{item.name}</Name>
                <Bio>{item.bio}</Bio>
                <ProfileButton onPress={() => {}}>
                  <ProfileButtonText>Ver perfil</ProfileButtonText>
                </ProfileButton>
              </User>
            )} // fim renderItem
          />
        </Container>
      </>
    );
  }
}
Main.navigationOptions = {
  title: 'Usuários',
};
