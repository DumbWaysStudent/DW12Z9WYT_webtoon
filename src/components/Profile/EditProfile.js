import React, {Component} from 'react';
import {
  Container,
  Content,
  Button,
  Text,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Footer,
  FooterTab,
  View,
} from 'native-base';
import {Image, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

export default class Profile extends Component {
  static navigationOptions = {header: null};

  render() {
    return (
      <Container style={{backgroundColor: 'white'}}>
        <Header style={{backgroundColor: 'white'}}>
          <Left>
            <Title style={{color: 'black'}}>Edit Profil</Title>
          </Left>

          <Right>
            <Icon
              name="check"
              onPress={() => {
                alert('berhasil');
              }}
              style={{marginRight: 10, color: '#676767'}}
            />
          </Right>
        </Header>
        <Content>
          <View>
            <Image
              source={{
                uri:
                  'https://icon-library.net/images/profile-png-icon/profile-png-icon-1.jpg',
              }}
              style={{
                alignSelf: 'center',
                height: 200,
                width: 200,
                borderRadius: 100,
              }}
            />
          </View>
          <Text style={{alignSelf: 'center', fontSize: 22, fontWeight: 'bold'}}>
            Your Name
          </Text>
          <Button
            style={{
              backgroundColor: 'white',
              marginTop: 5,
              borderWidth: 1,
              borderColor: 'black',
            }}>
            <Text style={{color: 'black'}}>Your Name</Text>
          </Button>
        </Content>

        <Footer>
          <FooterTab style={{backgroundColor: 'white', borderTopWidth: 1}}>
            <Button onPress={() => this.props.navigation.navigate('ForYou')}>
              <Icon name="apps" style={{color: 'black'}} />
              <Text style={{color: 'black'}}>For You</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Favourite')}>
              <Icon name="star" style={{color: 'black'}} />
              <Text style={{color: 'black'}}>Faourites</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('profile')}>
              <Icon name="person" style={{color: 'black'}} />
              <Text style={{color: 'black'}}>profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
