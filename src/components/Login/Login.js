import React, {Component} from 'react';
import {Text, Form, Item, Input, Button, Icon} from 'native-base';
import {View} from 'react-native';

export default class pass extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      icon: 'eye-off', //state icon dibuat untuk merubah icon,awalan
      status: true, //diambil dari secureTextEntry ber nilai true -> karakter ter-hidden
      buttonDisabled: true, //untuk menyimpan nilai dari status button apakah dapat dipencet atau tidak
      email: '', // berupa string kosong yang nantinya akan terisi ketika email diketik
    };
  }

  changeIcon = () => {
    //fungsi ini mengubah 2 item, icon dan status dari securetextentry
    this.setState(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
      //fungsi akan melihat value dari si icon,jika berbentuk eye maka akan diubah menjadi eye-off,begitupula sebaliknya
      status: !prevState.status,
      //fungsi akan membalikkan status daripada si karakter jika awalnya true maka akan menjadi false dan tulisan terlihat
    }));
  };

  emailValidator = email => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) == true) {
      //inputan email akan dicocokan dengan regex jika nilainya true maka fungsi dijalankan dan tombol button dibuka
      this.setState({
        email,
        buttonDisabled: false,
      });
    } else {
      this.setState({
        email,
        buttonDisabled: true,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Log In</Text>
          <Text style={styles.titleDesc}>Login with your account</Text>
        </View>
        <Form>
          <Item>
            <Input
              placeholder="Email"
              onChangeText={email => this.emailValidator(email)}
              //Ketika inputan email diketikkan akan dikirimkan ke state diatas
            />
          </Item>
          <Item style={styles.pastContainer}>
            <Input
              secureTextEntry={this.state.status}
              //secureTextEntry berfungsi supaya karakter tidak terlihat
              placeholder="Password"
            />
            <Icon name={this.state.icon} onPress={() => this.changeIcon()} />
          </Item>
        </Form>
        <View style={{margin: 13}}>
          <Button
            success
            block
            disabled={this.state.buttonDisabled}
            style={{
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => this.props.navigation.navigate('ForYou')}>
            <Text>Login</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: 'green',
    margin: 7,
  },
  titleDesc: {
    marginTop: 20,
  },
  containerTitle: {
    alignItems: 'center',
  },
  pastContainer: {
    flexDirection: 'row',
    borderWidth: 5,
  },
};
