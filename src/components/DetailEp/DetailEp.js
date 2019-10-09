import React, {Component} from 'react';
import {Container, Content, View, Icon} from 'native-base';
import {StyleSheet, FlatList, Share, Image} from 'react-native';

export default class DetailEp extends Component {
  constructor() {
    super();
    this.state = {
      chapter: [
        {
          image:
            'https://2.bp.blogspot.com/jXtASSEPGQ8rQCyfOxQPwWdIFBWByzZ4yJMbvO3_MlXVu-mvtg7IE8JIvzuln_elP7u62C7WVQ19WLeICUUhxyS05bYBus9RAedX7xg2gieWoVMSy5KD-PxVsIAPbkgv5coYZJtCAw=s1600',
        },
        {
          image:
            'https://2.bp.blogspot.com/ZEzW7QKkvF1FcYUzLBiJlcluPtAVXV5GLUreHLgdsAI5eqknV1ONNZEuTJxFUJ0OgP40MiLGYpP2Q-7cjnELPBJhExRnjuqFchrO2rt6bMDgDp8GWa9Xoz8IH_OUOKcI8Pf1XaopLA=s1600',
        },
        {
          image:
            'https://2.bp.blogspot.com/hwXEpNfLb5y9Bb6MGhYbaD9zniJvLR9lkia-ZAi_pqAuu_VPrNvi4_MTb4iBlnbgJUksotO1w9H9UHkpWJCooWi2nKNSDeXtMjBYPq08n_FPddzv5UcFvdbMnbrhNCN1QReFcjG2qg=s1600',
        },
        {
          image:
            'https://2.bp.blogspot.com/IcBYmu_tgraQgsfbJvkbId_K9UO8Pz67G7yws6-EXXYcaQMuNvh4OPcghTMKrtpTsvJITZp8saDvk9EuwM-Onq3xJlWChCOPAswWt2SulEWsRU6597tiLLQrch4itt6h3rEu_HS3TA=s1600',
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
      // untuk menanmpilkan ikon header share di sebelah kanan
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
          <View>
            <FlatList
              data={this.state.chapter}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View key={item.image}>
                  <Image
                    style={{width: 325, height: 425}}
                    source={{uri: item.image}}
                  />
                </View>
              )}
            />
          </View>
        </Content>
      </Container>
    );
  }
}
