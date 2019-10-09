import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Content,
  Container,
  Header,
} from 'native-base';

export default class Profile extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'white', borderBottomWidth: 2}}>
          <View>
            <Text> Profile Page</Text>
            <Icon name="edit" />
          </View>
        </Header>

        <Content>
          <View>
            <Icon name="profile" />
            <View>
              <Text>My Webtoon Creation</Text>
              <Text>Log Out</Text>
            </View>
          </View>
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
