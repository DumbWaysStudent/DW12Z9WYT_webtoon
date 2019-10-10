import React, {Component} from 'react';
import {Container, Content, View, Icon} from 'native-base';
import {StyleSheet, FlatList, Share, Image} from 'react-native';

export default class DetailEp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chapter: this.props.navigation.state.params.item,
    };
  }

  componentDidMount() {
    console.log(this.state.chapter);
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

  render() {
    return (
      <Container>
        <Content>
          <View>
            <View>
              <Image
                style={{width: 325, height: 425}}
                source={{uri: this.state.chapter.content[0]}}
              />
            </View>
            {/* <FlatList
              data={this.state.chapter}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View key={item.image}>
                  <Image
                    style={{width: 325, height: 425}}
                    source={{uri: this.props.navigation.state.params.image[1]}}
                  />
                </View>
              )}
            /> */}
          </View>
        </Content>
      </Container>
    );
  }
}
