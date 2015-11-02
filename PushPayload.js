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
              paddingTop: 280,
              justifyContent: 'flex-start',
              alignItems: 'center'
           }}>
           <Text> The Details of the Git Activity is shown here. You can click on above to get back to the list view</Text>
        </View>   
      );
  }
}


module.exports = PushPayload;