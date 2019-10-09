import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Share,
} from 'react-native';
import {Container, Content, Header, Footer, Row, Icon} from 'native-base';

export default class DetailScreen extends Component {
  constructor() {
    super();
    this.state = {
      details: [
        {
          ep: 'Ep.4',
          date: '07 October 2019',
          image:
            'https://cdn.imagecomics.com/assets/i/releases/3344/rose-vol-1-tp_65f5bec524.jpg',
        },
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

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title'),
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <Icon
          type="FontAwesome"
          name="share-alt"
          onPress={() => Share.share({message: '???'})}
        />
      ),
    };
  };

  render() {
    return (
      <Container>
        <Content>
          <View style={{marginBottom: 5, alignItems: 'center'}}>
            {/* <Text>Title : {this.props.navigation.getParam('title')}</Text> */}
            <View style={{borderWidth: 2}}>
              <Image
                style={{
                  width: 360,
                  height: 195,
                  resizeMode: 'contain',
                }}
                source={{uri: this.props.navigation.getParam('image')}}
              />
            </View>
          </View>

          <View>
            <FlatList
              data={this.state.details}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View key={item.image}>
                  <Row style={{margin: 11}}>
                    <TouchableOpacity style={{borderWidth: 2, margin: 7}}>
                      <Image
                        style={{width: 56, height: 85, resizeMode: 'contain'}}
                        source={{uri: item.image}}
                      />
                    </TouchableOpacity>
                    <View style={{margin: 5}}>
                      <Text style={{fontWeight: 'bold'}}>{item.ep}</Text>
                      <Text>{item.date}</Text>
                    </View>
                  </Row>
                </View>
              )}
            />
          </View>
        </Content>
      </Container>
    );
  }
}
