/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Store';
import { Header, CryptoContainer } from './src/components';


export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <ImageBackground
            style={styles.image}
            source={require('./assets/images/bitcion3.jpg')}>
          <View style={styles.container}>
            <Header />
            <CryptoContainer />
          </View>
        </ImageBackground>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
      // flex: 1,
      opacity: 0.8,
      // resizeMode: 'cover', // or 'stretch'
      // zIndex: 0.3
      flex: 1,
      alignSelf: 'stretch',
      width: undefined,
      height: undefined
  },
});
// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class App extends Component<{}> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }


