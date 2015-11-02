'use strict'

var React = require('react-native');
var buffer = require('buffer');
var Feed = require('./Feed');

var {
  Text,
  View,
  Component,
  StyleSheet,
  TabBarIOS,
  NavigatorIOS
} = React;


class AppContainer extends Component {
	constructor(props){
		super(props);

		this.state = {
          selectedTab: 'feed'
		}
	}

	render() {
      return(
        
          <TabBarIOS style={styles.container}>
            <TabBarIOS.Item 
              title="Feed"
              selected={this.state.selectedTab=='feed'}
              icon={require('image!inbox')}
              style={styles.tabIcon}
              onPress={()=>this.setState({selectedTab:"feed"})}
            >
              <NavigatorIOS
                  style={{
                    flex: 1
                  }}
                  initialRoute={{
                    component: Feed,
                    title: 'Feed'
                  }}
                  />
              
            </TabBarIOS.Item>

            <TabBarIOS.Item 
              title="Search"
              selected={this.state.selectedTab=='search'}
              icon={require('image!search')}
              style={styles.tabIcon}
              onPress={()=>this.setState({selectedTab:"search"})}
            >
                <Feed />
              
            </TabBarIOS.Item>

          </TabBarIOS>
      );
  }
}


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
    backgroundColor: "red",
    width:100
  }

});

module.exports = AppContainer;