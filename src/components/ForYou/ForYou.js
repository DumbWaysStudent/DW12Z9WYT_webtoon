import React, {Component} from 'react';
import {
  Container,
  Content,
  View,
  Text,
  Item,
  Input,
  Button,
  Header,
  Row,
  Footer,
  FooterTab,
  Icon,
  Body,
} from 'native-base';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-banner-carousel';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 180;

export default class ForYou extends Component {
  constructor() {
    super();
    this.state = {
      banners: [
        {
          title: 'The Secret of Angel',
          image:
            'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
        },
        {
          title: 'Pasutri Gaje',
          image:
            'https://4.bp.blogspot.com/-7RzHQQanlqY/XE7r94lzUCI/AAAAAAAACqI/keHhTWrJ1441h7vHWIL_FNf912DnsRMbQCLcBGAs/s1600/Pasutri%2BGaje%2BSeason%2B2%2BAnissa%2BNisfihani%2BWebtoon%2BIndonesia.JPG',
        },
        {
          title: 'Young Mom',
          image:
            'https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-10-190819-wwwwebtoonscom-aa64078ba943e7895194e96f853d4d20.png',
        },
        {
          title: 'Killstagram',
          image:
            'https://swebtoon-phinf.pstatic.net/20190510_14/1557483424696HgCs5_JPEG/thumb_ipad.jpg',
        },
        {
          title: 'The Girls Are Monster',
          image:
            'https://swebtoon-phinf.pstatic.net/20190418_73/15555671541411jrkc_JPEG/thumb_ipad.jpg',
        },
      ],
    };
  }

  static navigationOptions = {header: null};

  renderPage(image, index) {
    return (
      <View key={index} style={{margin: 3}}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('DetailScreen', {
              title: this.state.banners.title,
            })
          }>
          <Image
            style={{
              width: BannerWidth,
              height: BannerHeight,
              resizeMode: 'contain',
            }}
            source={{uri: image}}
          />
        </TouchableOpacity>
      </View>
    );
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
          <View style={styles.container}>
            <Carousel
              autoplay
              autoplayTimeout={3000} //gambar berpindah dalam 3 detik
              loop
              index={0}
              pageSize={BannerWidth}>
              {this.state.banners.map((image, index) =>
                this.renderPage(image.image, index),
              )}
            </Carousel>
          </View>

          <View style={{flex: 1, margin: 15}}>
            <Text
              style={{
                marginBottom: 2,
                fontWeight: 'bold',
                borderBottomWidth: 2,
              }}>
              Favourite
            </Text>
            <ScrollView horizontal={true}>
              {/* Gambar yang akan ditampilkan menyamping karena memakai attribut horizontal true */}
              {this.state.banners.map(image => (
                <View
                  style={{
                    flex: 1,
                    width: 100,
                    alignSelf: 'center',
                  }}>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('DetailScreen', {
                          title: image.title,
                          image: image.image,
                        })
                      }>
                      <Image
                        style={{width: 75, height: 75, resizeMode: 'contain'}}
                        // Gambar harus selalu diberi height dan weight, jika tidak maka gambar tidak muncul
                        source={{uri: image.image}}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={{fontSize: 13}}>{image.title}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={{margin: 15, marginTop: 1}}>
            <Text
              style={{
                marginBottom: 2,
                fontWeight: 'bold',
                borderBottomWidth: 2,
              }}>
              All
            </Text>

            {this.state.banners.map(image => (
              <View style={{flex: 1, width: 130}}>
                <Row>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('DetailScreen')
                    }>
                    <Image
                      style={{width: 75, height: 75, margin: 7, borderWidth: 5}}
                      source={{uri: image.image}}
                    />
                  </TouchableOpacity>
                  <View style={{marginLeft: 13, justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: 13,
                        marginBottom: 5,
                        fontWeight: 'bold',
                      }}>
                      {image.title}
                    </Text>
                    <Button warning small>
                      <Text style={{color: 'black'}}>+ Favourite</Text>
                    </Button>
                  </View>
                </Row>
              </View>
            ))}
          </View>
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor: 'white', borderTopWidth: 1}}>
            <Button onPress={() => this.props.navigation.navigate('ForYou')}>
              <Icon name="apps" style={{color: 'orange'}} />
              <Text style={{color: 'orange'}}>For You</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
});
