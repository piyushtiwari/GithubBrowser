'use strict'

var React = require('react-native');
var buffer = require('buffer');
var moment = require('moment');

var {
  Text,
  View,
  Component,
  ListView,
  ActivityIndicatorIOS,
  Image,
  TouchableHighlight,
  NavigatorIOS
} = React;


class PushPayload extends Component {
  constructor(props){
    super(props);

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.state = {
      dataSource: ds
    }
  }

  render() {
    return (
        <View style={{
              flex: 1,
              paddingTop: 80,
              justifyContent: 'flex-start',
              alignItems: 'center'
           }}>
           <Text> Is the Paylooad workmng ?</Text>
        </View>   
      );
  }
}


module.exports = PushPayload;