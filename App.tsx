import React from 'react';
import {View, Text, Dimensions, ScaledSize} from 'react-native';

type Props = {};

type State = {
  width: number;
  height: number;
  window: ScaledSize;
  screen: ScaledSize;
};

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      window: Dimensions.get('window'),
      screen: Dimensions.get('screen'),
    };
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            height: 50,
            width: this.state.width,
            backgroundColor: 'green',
          }}>
          <Text>Full width view</Text>
        </View>
        <Text style={{fontSize: this.state.width / 15, textAlign: 'center'}}>
          This is a text 15
        </Text>
        <Text style={{fontSize: this.state.width / 13, textAlign: 'center'}}>
          This is a text 13
        </Text>
        <Text style={{textAlign: 'center'}}>
          screen:{JSON.stringify(this.state.screen)}
        </Text>
        <Text style={{textAlign: 'center'}}>
          window:{JSON.stringify(this.state.window)}
        </Text>
      </View>
    );
  }
}