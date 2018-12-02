import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

class PlaceInput extends Component {

	state = {
	    placeName: ''
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
	    this.props.onPlaceAdded(this.state.placeName);
	};
	render () {

		return (
			<View style={styles.inputContent}>
	          <TextInput
	            style={styles.placeInput}
	            value={this.state.placeName} 
	            placeholder ="please type name"
	            onChangeText={this.placeNameChangeHanler}
	          />
	          <Button title="add" style={styles.placeButton} onPress={this.placeSubmitHanler}/>
	        </View>

		);

	};

}

const styles = StyleSheet.create({
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

export default PlaceInput;
