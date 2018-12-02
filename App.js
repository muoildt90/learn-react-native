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


import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/dieu.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends Component<props> {
  state = {
    places: [],
    selectedPlace: null
  };
  placeAddedHanler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri: "https://media.thethao247.vn/upload/thetrung/2018/09/22/quang-hai.jpg"
          }
        })
      };
    });
  };
  placeDeletedHanler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });

  };
  modalClosedHanler = () => {
    this.setState ({
      selectedPlace: null
    });
  };
  placeSelectedHanler = key => {
    this.setState (prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })  
      };
      
    });
  };
  render() {
    
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.state.selectedPlace} 
          onItemDeleted={this.placeDeletedHanler} 
          onModalClosed={this.modalClosedHanler}/>
        <PlaceInput onPlaceAdded={this.placeAddedHanler}/>
        <PlaceList places ={this.state.places} onItemSelected={this.placeSelectedHanler}/>
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
