import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "8bae6cfe456c6a0ab28a458c9689978e";

export default class extends React.Component{
  state = {
    isLoading: true
  }
  getWeather = async(latitude, longitude) => {
    try {
      const {data:{main:{temp}, weather}} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
      this.setState({isLoading: false, temp: temp, condition: weather[0].main});
    } catch (error) {
      Alert.alert("Can't get data.", "So sad");
      console.log(error);
    }
  }
  geoLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
    
  }
  componentDidMount(){
    this.geoLocation();
  }
  render() {
    const {isLoading, temp, condition} = this.state;
    return isLoading? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}