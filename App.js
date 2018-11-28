/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class App extends Component<Props> {
  state = {
    placeName: '',
    places: []
  }
  placeNameChangeHanler = val => {
    this.setState({
      placeName: val
    });
  };
  placeSubmitHanler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };
  render() {
    const placeOutPut = this.state.places.map((place, i) => (<Text key={i}>{place}</Text>));
    return (
      <View style={styles.container}>
        <View style={styles.inputContent}>
          <TextInput
            style={styles.placeInput}
            value={this.state.placeName} 
            placeholder ="please type name"
            onChangeText={this.placeNameChangeHanler}
          />
          <Button title="add" style={styles.placeButton} onPress={this.placeSubmitHanler}/>
        </View>
        <View>{placeOutPut}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputContent: {
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});
