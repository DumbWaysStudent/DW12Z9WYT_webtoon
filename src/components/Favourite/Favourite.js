import React, {Component} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Container,
  Header,
  Item,
  Input,
  Content,
  Row,
} from 'native-base';

export default class Favourite extends Component {
  static navigationOptions = {header: null};

  constructor(props) {
    super(props);
    this.state = {
      banners: [
        {
          title: 'The Secret of Angel',
          image:
            'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
          favorite: '100+ favorite',
        },
        {
          title: 'Pasutri Gaje',
          image:
            'https://4.bp.blogspot.com/-7RzHQQanlqY/XE7r94lzUCI/AAAAAAAACqI/keHhTWrJ1441h7vHWIL_FNf912DnsRMbQCLcBGAs/s1600/Pasutri%2BGaje%2BSeason%2B2%2BAnissa%2BNisfihani%2BWebtoon%2BIndonesia.JPG',
          favorite: '90 favorite',
        },
        {
          title: 'Young Mom',
          image:
            'https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-10-190819-wwwwebtoonscom-aa64078ba943e7895194e96f853d4d20.png',
          favorite: '80 favorite',
        },
      ],
    };
  }

  render() {
    return (
      <Container>
        <Header searchBar style={{backgroundColor: 'white'}}>
          <Item rounded>
            <Input placeholder="Search" />
            <Icon name="ios-search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content>
          <View>
            <FlatList
              data={this.state.banners}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View key={item.image}>
                  <Row style={{margin: 5}}>
                    <View style={{borderWidth: 2}}>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('DetailScreen')
                        }>
                        <Image
                          style={{height: 75, width: 75}}
                          source={{uri: item.image}}
                        />
                      </TouchableOpacity>
                    </View>
                    <View>
                      <Text style={{fontWeight: 'bold', margin: 5}}>
                        {item.title}
                      </Text>
                      <Text style={{margin: 5}}>{item.favorite}</Text>
                    </View>
                  </Row>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </Content>

        <Footer>
          <FooterTab style={{backgroundColor: 'white', borderTopWidth: 1}}>
            <Button onPress={() => this.props.navigation.navigate('ForYou')}>
              <Icon name="apps" style={{color: 'black'}} />
              <Text style={{color: 'black'}}>For You</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Favourite')}>
              <Icon name="star" style={{color: 'green'}} />
              <Text style={{color: 'green'}}>Faourites</Text>
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
