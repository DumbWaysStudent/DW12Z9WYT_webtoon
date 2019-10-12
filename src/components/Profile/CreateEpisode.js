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
            'https://2.bp.blogspot.com/jXtASSEPGQ8rQCyfOxQPwWdIFBWByzZ4yJMbvO3_MlXVu-mvtg7IE8JIvzuln_elP7u62C7WVQ19WLeICUUhxyS05bYBus9RAedX7xg2gieWoVMSy5KD-PxVsIAPbkgv5coYZJtCAw=s1600',
        },
        {
          ep: '1. Cover',
          date: '04 October 2019',
          image:
            'https://2.bp.blogspot.com/ZEzW7QKkvF1FcYUzLBiJlcluPtAVXV5GLUreHLgdsAI5eqknV1ONNZEuTJxFUJ0OgP40MiLGYpP2Q-7cjnELPBJhExRnjuqFchrO2rt6bMDgDp8GWa9Xoz8IH_OUOKcI8Pf1XaopLA=s1600',
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
            borderBottomWidth: 1,
            borderBottomColor: 'black',
          }}>
          <Left>
            <TouchableOpacity>
              <Icon
                name="arrow-back"
                onPress={() => this.props.navigation.navigate('CreateWebtoon')}
              />
            </TouchableOpacity>
          </Left>
          <Body>
            <Text style={{fontWeight: 'bold'}}>Create Episode</Text>
          </Body>
          <Right>
            <TouchableOpacity>
              <Icon name="checkmark" style={{color: 'green'}} />
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
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('EditWebtoon')
                      }>
                      <Image
                        style={{
                          width: 80,
                          height: 80,
                          padding: 10,
                        }}
                        source={{uri: item.image}}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={{justifyContent: 'center', margin: 7}}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginBottom: 5,
                      }}>
                      {item.ep}
                    </Text>
                    <View style={{borderWidth: 2}}>
                      <Button
                        style={{backgroundColor: 'red'}}
                        onPress={() => alert('Data has been deleted')}>
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
            }}
            onPress={() => alert('Image has been added')}>
            <Text>+ Image</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
