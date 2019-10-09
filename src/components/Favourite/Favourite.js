import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Footer, FooterTab, Button, Icon} from 'native-base';

export default class Favourite extends Component {
  render() {
    return (
      <View>
        <Text> Favourite Page</Text>
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
      </View>
    );
  }
}
