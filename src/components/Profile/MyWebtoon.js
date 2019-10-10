import React, {Component} from 'react';
import {
  Container,
  Content,
  Button,
  Text,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Row,
  View,
} from 'native-base';
import {Image, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

export default class MyWebtoon extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'MyWebtoon',
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      // untuk menanmpilkan ikon header share di sebelah kanan
      headerRight: (
        <Icon
          type="FontAwesome"
          name="share-alt"
          onPress={() => Share.share({message: '????'})}
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      banners: [
        {
          title: 'The Secret of Angel',
          image:
            'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
          favorite: '32 episodes',
        },
        {
          title: 'Pasutri Gaje',
          image:
            'https://4.bp.blogspot.com/-7RzHQQanlqY/XE7r94lzUCI/AAAAAAAACqI/keHhTWrJ1441h7vHWIL_FNf912DnsRMbQCLcBGAs/s1600/Pasutri%2BGaje%2BSeason%2B2%2BAnissa%2BNisfihani%2BWebtoon%2BIndonesia.JPG',
          favorite: '90 episodes',
        },
        {
          title: 'Young Mom',
          image:
            'https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-10-190819-wwwwebtoonscom-aa64078ba943e7895194e96f853d4d20.png',
          favorite: '80 epidodes',
        },
      ],
    };
  }

  render() {
    return (
      <Container>
        <View>
          <FlatList
            data={this.state.banners}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View key={item.image}>
                <Row style={{margin: 5}}>
                  <View style={{borderWidth: 2}}>
                    <Image
                      style={{height: 75, width: 75}}
                      source={{uri: item.image}}
                    />
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
          />
        </View>
      </Container>
    );
  }
}
