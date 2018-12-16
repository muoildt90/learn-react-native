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
  View
} from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/dieu.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index';

class App extends Component<props> {
  placeAddedHanler = placeName => {
    this.props.onAddPlace(placeName)
  };
  placeDeletedHanler = () => {
    this.props.onDeletePlace()

  };
  modalClosedHanler = () => {
    this.props.onDeSelectPlace()
  };
  placeSelectedHanler = key => {
    this.props.onSelectPlace(key)
   
  };
  render() {
    
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.props.selectedPlace} 
          onItemDeleted={this.placeDeletedHanler} 
          onModalClosed={this.modalClosedHanler}/>
        <PlaceInput onPlaceAdded={this.placeAddedHanler}/>
        <PlaceList places ={this.props.places} onItemSelected={this.placeSelectedHanler}/>
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
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace:  state.places.selectedPlace
  };
};
const mapDispathToProps = dispath => {
  return {
    onAddPlace: (name) => dispath(addPlace(name)),
    onDeletePlace: () => dispath(deletePlace()),
    onSelectPlace: (key) => dispath(selectPlace(key)),
    onDeSelectPlace: () => dispath(deselectPlace())
  };
};
export default connect(mapStateToProps, mapDispathToProps)(App);
