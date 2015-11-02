/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var AuthService = require('./AuthService');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS
} = React;

var Login = require('./Login');
var AppContainer = require('./AppContainer');

var GithubBrowser = React.createClass({
  componentDidMount: function(){
    AuthService.getAuthInfo( (err, authInfo)=> {
      this.setState({
        checkingAuth: false,
        isLoggedIn: authInfo != null
      })

    })
  },

  render: function() {
    if(this.state.checkingAuth){
      return (
          <View style={styles.container}>
            <ActivityIndicatorIOS 
              animating={true}
              size="large"
              style={styles.loader} />
          </View>
        )
    }

    if(this.state.isLoggedIn){
      return (
          <AppContainer />
        )
    }else{
      return (
        <Login onLogin={this.onLogin}/>
      );  
    }
    
  },

  onLogin: function() {
    console.log('Successfully Logged in, can show different view');
    this.setState({isLoggedIn: true});
  },

  getInitialState: function(){
    return {
      isLoggedIn: false,
      checkingAuth: true
    }
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser);