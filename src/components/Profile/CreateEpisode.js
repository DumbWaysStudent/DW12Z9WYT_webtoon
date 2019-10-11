import React, {Component} from 'react';
import {
  Container,
  Content,
  Button,
  Text,
  Row,
  Left,
  Right,
  Icon,
  Input,
  Header,
  Body,
  View,
} from 'native-base';
import {Image, Share, FlatList, TouchableOpacity} from 'react-native';

export default class CreateEpi extends Component {
  static navigationOptions = {header: null};

  constructor() {
    super();
    this.state = {
      details: [
        {
          ep: '2. Introduction',
          date: '05 October 2019',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/61mv4EJj9wL._SX331_BO1,204,203,200_.jpg',
        },
        {
          ep: '1. Cover',
          date: '04 October 2019',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/612bK1krzxL._SX319_BO1,204,203,200_.jpg',
        },
      ],
    };
  }

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'white'}}>
          <Left>
            <TouchableOpacity>
              <Icon
                name="arrow-back"
                onPress={() => this.props.navigation.navigate('CreateWebtoon')}
              />
            </TouchableOpacity>
          </Left>
          <Body>
            <Text style={{fontWeight: 'bold'}}>Create Webtoon</Text>
          </Body>
          <Right>
            <TouchableOpacity>
              <Icon
                name="checkmark"
                onPress={() => this.props.navigation.navigate('CreateEpi')}
                style={{color: 'yellow'}}
              />
            </TouchableOpacity>
          </Right>
        </Header>

        <Content style={{margin: 7}}>
          <Text style={{marginBottom: 5, fontWeight: 'bold'}}>Title</Text>
          <Input style={{marginBottom: 12, borderWidth: 2}}></Input>
          <View>
            <Text style={{marginBottom: 7, fontWeight: 'bold'}}>Episode</Text>
            <FlatList
              data={this.state.details}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <Row>
                  <View style={{borderWidth: 2, margin: 5}}>
                    <Image
                      style={{
                        width: 80,
                        height: 80,
                        padding: 10,
                      }}
                      source={{uri: item.image}}
                    />
                  </View>

                  <View style={{alignItems: 'center', margin: 7}}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginBottom: 5,
                      }}>
                      {item.ep}
                    </Text>
                    <View style={{borderWidth: 2}}>
                      <Button style={{backgroundColor: 'red'}}>
                        <Text>Delete</Text>
                      </Button>
                    </View>
                  </View>
                </Row>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>

          <Button
            light
            style={{
              borderWidth: 2,
              borderColor: 'black',
              justifyContent: 'center',
              marginTop: 12,
            }}>
            <Text>+ Image</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
