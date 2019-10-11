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
          ep: '3. Opening',
          date: '06 October 2019',
          image:
            'https://2.bp.blogspot.com/jXtASSEPGQ8rQCyfOxQPwWdIFBWByzZ4yJMbvO3_MlXVu-mvtg7IE8JIvzuln_elP7u62C7WVQ19WLeICUUhxyS05bYBus9RAedX7xg2gieWoVMSy5KD-PxVsIAPbkgv5coYZJtCAw=s1600',
        },
        {
          ep: '2.Introduction',
          date: '05 October 2019',
          image:
            'https://2.bp.blogspot.com/ZEzW7QKkvF1FcYUzLBiJlcluPtAVXV5GLUreHLgdsAI5eqknV1ONNZEuTJxFUJ0OgP40MiLGYpP2Q-7cjnELPBJhExRnjuqFchrO2rt6bMDgDp8GWa9Xoz8IH_OUOKcI8Pf1XaopLA=s1600',
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
                onPress={() => this.props.navigation.navigate('EditWebtoon')}
              />
            </TouchableOpacity>
          </Left>
          <Body>
            <Text style={{fontWeight: 'bold'}}>Edit Episodes</Text>
          </Body>
          <Right>
            <TouchableOpacity>
              <Icon
                name="checkmark"
                onPress={() => this.props.navigation.navigate('MyWebtoon')}
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
              <Text>+ Image</Text>
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
              <Text style={{color: 'white'}}>Delete Episode</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
