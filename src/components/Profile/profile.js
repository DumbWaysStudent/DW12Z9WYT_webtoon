import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Content,
  Container,
  Header,
  Left,
  Right,
  Title,
} from 'native-base';

export default class Profile extends Component {
  static navigationOptions = {header: null};
  render() {
    return (
      <Container>
        <Header
          style={{
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            marginBottom: 8,
          }}>
          <Left>
            <Title style={{color: 'black'}}>Profile</Title>
          </Left>
          <Right>
            <Icon
              name="md-create"
              onPress={() => this.props.navigation.navigate('EditProfile')}
              style={{marginRight: 10, color: 'orange'}}
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
            onPress={() => this.props.navigation.navigate('MyWebtoon')}
            style={{
              backgroundColor: 'white',
              marginTop: 5,
              borderWidth: 1,
              borderColor: 'black',
            }}>
            <Text style={{color: 'black'}}>My WebToon creation</Text>
          </Button>
          <Button
            onPress={() => this.props.navigation.navigate('Login')}
            style={{
              backgroundColor: 'white',
              marginTop: 5,
              borderWidth: 1,
              borderColor: 'black',
            }}>
            <Text style={{color: 'black'}}>Logout</Text>
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
