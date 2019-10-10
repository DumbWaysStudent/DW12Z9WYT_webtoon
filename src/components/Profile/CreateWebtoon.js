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
  Footer,
  FooterTab,
  View,
} from 'native-base';
import {Image, Share, FlatList, TouchableOpacity} from 'react-native';

export default class CreateWebtoon extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Create Webtoon',
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <Icon
          type="FontAwesome"
          name="check"
          onPress={() => Share.share({message: '???'})}
          style={{color: 'yellow'}}
        />
      ),
    };
  };

  constructor() {
    super();
    this.state = {
      details: [
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
      <Container
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
                  <View>
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

          <Button
            light
            style={{
              borderWidth: 2,
              borderColor: 'black',
              justifyContent: 'center',
            }}>
            <Text>+ Add Episodes</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
