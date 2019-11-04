import React, {Component} from 'react';
import {Text, Form, Item, Input, Button, Icon} from 'native-base';
import {View, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default class Register extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      icon: 'eye-off',
      //isDisabled: true,
      status: true,
      email: '',
      password: null,
      token: '',
      id: null,
      name: '',
    };
  }

  changeIcon = () => {
    this.setState(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
      status: !prevState.status,
    }));
  };

  userRegister = () => {
    axios({
      method: 'POST',
      url: `http://192.168.1.23:2019/api/v1/register`,
      data: {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      },
    }).then(res => {
      this.setState({
        token: res.data.token,
        id: res.data.id,
      });

      AsyncStorage.setItem('token', this.state.token);
      AsyncStorage.setItem('id', JSON.stringify(this.state.id));
      this.props.navigation.navigate('ForYou');
    });
  };

  userValidation = email => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) == true && this.state.password != null) {
      this.setState({
        email,
        isDisabled: false,
      });
    } else {
      this.setState({
        email,
        isDisabled: true,
      });
    }
    this.setState({
      email,
    });
  };

  passValidation = password => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (password != null && reg.test(this.state.email) == true) {
      this.setState({
        password,
        isDisabled: false,
      });
    } else {
      this.setState({
        password,
        isDisabled: true,
      });
    }
    this.setState({
      password,
    });
  };

  render() {
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <Image
          style={{width: 125, height: 125, alignSelf: 'center'}}
          source={require('../Screenshot/logo.png')}
        />
        <Text style={{alignSelf: 'center', fontSize: 50, color: 'green'}}>
          REGISTER
        </Text>
        <Text style={{alignSelf: 'center'}}>
          Sign up now to gain more access
        </Text>
        <View style={{margin: 8}}>
          <View>
            <Form style={{justifyContent: 'center'}}>
              <Item>
                <Text>Name :</Text>
                <Input
                  onChangeText={name => {
                    this.setState({name});
                  }}
                />
              </Item>
              <Item>
                <Text>E-mail :</Text>
                <Input
                  onChangeText={email => {
                    this.setState({email});
                  }}
                />
              </Item>
              <Item>
                <Text>Password :</Text>
                <Input
                  secureTextEntry={this.state.status}
                  onChangeText={password => {
                    this.setState({password});
                  }}
                />
                <Icon
                  name={this.state.icon}
                  onPress={() => this.changeIcon()}
                />
              </Item>
            </Form>
          </View>

          <TouchableOpacity
            //onPress={() => this.props.navigation.navigate('ForYou')}
            onPress={() => this.userRegister()}
            primary
            disabled={this.state.isDisabled}>
            <View
              style={{
                alignItems: 'center',
                borderWidth: 1,
                borderRadius: 13,
                marginHorizontal: 65,
                backgroundColor: 'green',
                padding: 10,
                marginTop: 32,
              }}>
              <Text style={{color: 'white'}}>SIGN UP</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// import React, {Component} from 'react';
// import {Text, Toast, Root} from 'native-base';
// import {
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   View,
//   TextInput,
//   TouchableHighlight,
//   Dimensions,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import axios from 'axios';

// export default class Register extends Component {
//   static navigationOptions = {
//     header: null,
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       eye: true,
//       string: '',
//       allow: true,
//       pass: '',
//       name: '',
//       button_status: true,
//     };
//   }

//   register = async () => {
//     try {
//       let tempUser = {
//         email: this.state.string,
//         password: this.state.pass,
//         name: this.state.name,
//       };
//       await axios
//         .post(`http://192.168.1.23:2019/api/v1/register`, tempUser)
//         .then(response => {
//           if (typeof response.data !== 'undefined') {
//             Toast.show({
//               text: 'Register success, please login',
//               buttonText: 'Okay',
//               duration: 3000,
//             });
//             alert('user registered');
//             this.props.navigation.navigate('Login');
//           } else {
//             alert('Registration Failed check your network connection');
//           }
//         })
//         .catch(error => {
//           alert(error);
//         });
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   validate = () => {
//     if (this.state.string !== '' && this.state.pass !== '') {
//       if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.string)) {
//         this.state.allow = true;
//         Toast.show({
//           text: 'Correct Email Format',
//           buttonText: 'Okay',
//           duration: 3000,
//         });
//         this.register();
//       } else {
//         this.state.allow = false;
//         Toast.show({
//           text: 'Wrong Email Format',
//           buttonText: 'Okay',
//           duration: 3000,
//         });
//       }
//     } else {
//       Toast.show({
//         text: 'email or password cant be empty',
//         buttonText: 'Okay',
//         duration: 3000,
//       });
//     }
//   };

//   render() {
//     return (
//       <Root>
//         <View style={styles.container}>
//           <View style={styles.containerlogo}>
//             <Text style={styles.apptext}>REGISTER</Text>
//             <Text fontSize={10}>Sign Up Here</Text>
//           </View>
//           <View style={styles.containerform}>
//             <View style={styles.inputContainer}>
//               <Icon size={20} name="envelope" style={styles.inputIcon}>
//                 {' '}
//               </Icon>
//               <TextInput
//                 style={styles.inputs}
//                 placeholder="Email"
//                 keyboardType="email-address"
//                 underlineColorAndroid="transparent"
//                 onChangeText={email => this.setState({string: email})}
//               />
//             </View>
//             <View style={styles.inputContainer}>
//               <Icon size={20} name="key" style={styles.inputIcon}>
//                 {' '}
//               </Icon>
//               <TextInput
//                 style={styles.inputs}
//                 placeholder="Password"
//                 secureTextEntry={this.state.eye}
//                 underlineColorAndroid="transparent"
//                 onChangeText={password => this.setState({pass: password})}
//               />
//               <TouchableOpacity
//                 onPressIn={() => this.setState({eye: false})}
//                 onPressOut={() => this.setState({eye: true})}>
//                 <Icon name="eye" size={20} style={styles.Icon}></Icon>
//               </TouchableOpacity>
//             </View>
//             <View style={styles.inputContainer}>
//               <Icon size={20} name="user" style={styles.inputIcon}>
//                 {' '}
//               </Icon>
//               <TextInput
//                 style={styles.inputs}
//                 placeholder="Name"
//                 underlineColorAndroid="transparent"
//                 onChangeText={name => this.setState({name: name})}
//               />
//             </View>
//             <TouchableHighlight
//               style={[styles.buttonContainer, styles.loginButton]}
//               onPress={() => this.validate()}>
//               <Text style={styles.loginText}>Register</Text>
//             </TouchableHighlight>
//           </View>
//         </View>
//       </Root>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   containerlogo: {
//     alignItems: 'center',
//     marginTop: 70,
//     marginBottom: 30,
//     width: Dimensions.get('window').width,
//   },
//   containerform: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   inputContainer: {
//     borderRadius: 5,
//     borderWidth: 2,
//     width: 250,
//     height: 35,
//     marginBottom: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   inputs: {
//     height: 45,
//     marginLeft: 0,
//     borderBottomColor: '#FFFFFF',
//     flex: 1,
//   },
//   inputIcon: {
//     marginLeft: 15,
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     height: 45,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//     marginTop: 20,
//     width: 150,
//     borderRadius: 10,
//   },
//   loginButton: {
//     borderWidth: 2,
//   },
//   loginText: {
//     // color: '#673ab7',
//   },
//   apptext: {
//     fontSize: 30,
//     // color: 'black',
//   },
//   Icon: {
//     marginRight: 10,
//   },
// });
