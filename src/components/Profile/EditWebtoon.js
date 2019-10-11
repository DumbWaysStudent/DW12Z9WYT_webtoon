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

export default class CreateWebtoon extends Component {
  static navigationOptions = {header: null};

  constructor() {
    super();
    this.state = {
      details: [
        {
          ep: 'Ep.3',
          date: '06 October 2019',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/A1PP0yoz%2BbL.jpg',
        },
        {
          ep: 'Ep.2',
          date: '05 October 2019',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/61mv4EJj9wL._SX331_BO1,204,203,200_.jpg',
        },
        {
          ep: 'Ep.1',
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
        <Header
          style={{
            backgroundColor: 'white',
            borderBottomWidth: 2,
            borderBottomColor: 'black',
          }}>
          <Left>
            <TouchableOpacity>
              <Icon
                name="arrow-back"
                onPress={() => this.props.navigation.navigate('CreateEpi')}
              />
            </TouchableOpacity>
          </Left>
          <Body>
            <Text style={{fontWeight: 'bold'}}>Edit Webtoon</Text>
          </Body>
          <Right>
            <TouchableOpacity>
              <Icon
                name="checkmark"
                onPress={() => this.props.navigation.navigate('EditEpisode')}
                style={{color: 'yellow'}}
              />
            </TouchableOpacity>
          </Right>
        </Header>

        <Content style={{margin: 7}}>
          <Text style={{fontWeight: 'bold'}}>Title</Text>
          <Input style={{borderWidth: 2}}></Input>
          <View>
            <Text style={{fontWeight: 'bold'}}>Episode</Text>
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

                  <View style={{margin: 12, alignSelf: 'center'}}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginBottom: 10,
                      }}>
                      {item.ep}
                    </Text>
                    <View>
                      <Text style={{marginBottom: 10}}>{item.date}</Text>
                    </View>
                  </View>
                </Row>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>

          <View style={{margin: 5}}>
            <Button
              light
              onPress={() => this.props.navigation.navigate('CreateEpi')}
              style={{
                borderWidth: 2,
                borderColor: 'black',
                justifyContent: 'center',
                marginBottom: 7,
              }}>
              <Text>+ Add Episodes</Text>
            </Button>
            <Button
              light
              onPress={() => this.props.navigation.navigate('CreateEpi')}
              style={{
                borderWidth: 2,
                borderColor: 'black',
                justifyContent: 'center',
                backgroundColor: 'red',
              }}>
              <Text style={{color: 'white'}}>Delete Webtoon</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
