import React, {Component} from 'react';
import axios from 'axios';
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
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import getToons from '../../_redux/toons';
import getFav from '../../_redux/favorite';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 180;

class ForYou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [
        // {
        //   title: 'The Secret of Angel',
        //   image:
        //     'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
        // },
        // {
        //   title: 'Pasutri Gaje',
        //   image:
        //     'https://4.bp.blogspot.com/-7RzHQQanlqY/XE7r94lzUCI/AAAAAAAACqI/keHhTWrJ1441h7vHWIL_FNf912DnsRMbQCLcBGAs/s1600/Pasutri%2BGaje%2BSeason%2B2%2BAnissa%2BNisfihani%2BWebtoon%2BIndonesia.JPG',
        // },
        // {
        //   title: 'Young Mom',
        //   image:
        //     'https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-10-190819-wwwwebtoonscom-aa64078ba943e7895194e96f853d4d20.png',
        // },
        // {
        //   title: 'Killstagram',
        //   image:
        //     'https://swebtoon-phinf.pstatic.net/20190510_14/1557483424696HgCs5_JPEG/thumb_ipad.jpg',
        // },
        // {
        //   title: 'The Girls Are Monster',
        //   image:
        //     'https://swebtoon-phinf.pstatic.net/20190418_73/15555671541411jrkc_JPEG/thumb_ipad.jpg',
        // },
      ],
      keyword: '',
      token: '',
      favorites: [],
      id: null,
    };
  }

  async componentDidMount() {
    await this.getToken();
    await this.getId();
    // axios
    //   .get(`http:192.168.1.23:2019/api/v1/webtoons`)
    //   .then(res => {
    //     const data = res.data;
    //     console.log(data);
    //     console.log(this.state.id);
    //     this.setState({banners: data});
    //   })
    //   .catch(error => {
    //     console.log('Api call error');
    //   });
    this.showWebtoons();
    this.showFavorite();
  }

  async getToken() {
    await AsyncStorage.getItem('token').then(key =>
      this.setState({
        token: key,
      }),
    );
  }

  async getId() {
    await AsyncStorage.getItem('id').then(key =>
      this.setState({
        id: JSON.parse(key),
      }),
    );
  }

  showWebtoons = () => {
    this.props.getToons();
  };

  // showFavorite = () => {
  //   axios({
  //     method: 'GET',
  //     headers: {
  //       'content-type': 'application/json',
  //       authorization: `Bearer ${this.state.token}`,
  //     },
  //     url: `http:192.168.1.23:2019/api/v1/user/${this.state.id}/favorites`,
  //   }).then(res => {
  //     const favorites = res.data;
  //     this.setState({favorites});
  //     console.log(this.state.favorites);
  //   });
  // };

  showFavorite = () => {
    this.props.getFav((id = this.state.id), (token = this.state.token));
    this.setState({
      favorites: this.props.favorite.data.map(res => res.webtoon_id),
    });
    this.showWebtoons();

    console.log(this.state.favorite, '?????????????');
  };

  createFav = id => {
    axios({
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${this.state.token}`,
      },
      url: `http:192.168.1.23:2019/api/v1/user/${this.state.id}/favorite`,
      data: {
        webtoon_id: id,
      },
    }).then(this.showFavorite());
  };

  static navigationOptions = {header: null};

  renderPage(image, index) {
    return (
      <View key={index} style={{margin: 3}}>
        <Image
          style={{
            width: 365,
            height: 225,

            // resizeMode: 'contain',
          }}
          source={{uri: image}}
        />
      </View>
    );
  }

  render() {
    const {toons, favorite} = this.props;
    console.log(toons);

    return (
      <Container>
        <Header searchBar style={{backgroundColor: 'white'}}>
          <Item rounded>
            <Input
              placeholder="Search"
              onChangeText={keyword => this.setState({keyword})}
            />
            <Icon
              name="ios-search"
              onPress={() =>
                this.props.navigation.navigate('searchWebtoon', {
                  keyword: this.state.keyword,
                })
              }
            />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content>
          <View style={styles.container}>
            <Carousel
              autoplay
              autoplayTimeout={3000}
              loop
              index={0}
              pageSize={BannerWidth}>
              {toons.data.map((image, index) =>
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
              Favorite
            </Text>
            <ScrollView horizontal={true}>
              {favorite.data.map(image => (
                <View
                  style={{
                    width: 100,
                    flex: 1,
                    margin: 5,
                  }}>
                  <View style={{borderWidth: 2}}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('DetailScreen', {
                          title: image.toonId.title,
                          image: image.toonId.image,
                          toonid: image.toonId.id,
                        })
                      }>
                      <Image
                        style={{width: 95, height: 95}}
                        source={{uri: image.toonId.image}}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={{fontSize: 13}}>{image.toonId.title}</Text>
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

            {toons.data.map(image => (
              <View style={{flex: 1, width: 130}}>
                <Row>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('DetailScreen', {
                        title: image.title,
                        image: image.image,
                        toonid: image.id,
                      })
                    }>
                    <View style={{borderWidth: 1, margin: 5}}>
                      <Image
                        style={{
                          width: 75,
                          height: 75,
                          margin: 1,
                          borderWidth: 5,
                        }}
                        source={{uri: image.image}}
                      />
                    </View>
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
                    <Button
                      warning
                      small
                      onPress={() => this.createFav(image.id)}>
                      <Text style={{color: 'black'}}>+ Favorite</Text>
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
              <Icon name="apps" style={{color: 'green'}} />
              <Text style={{color: 'green', fontWeight: 'bold'}}>For You</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Favourite')}>
              <Icon name="star" style={{color: 'black'}} />
              <Text style={{color: 'black'}}>Favorites</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('profile')}>
              <Icon name="person" style={{color: 'black'}} />
              <Text style={{color: 'black'}}>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    toons: state.toons,
    favorite: state.favorite,
  };
};

const mapDispatchToProps = {
  getToons,
  getFav,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForYou);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
});
