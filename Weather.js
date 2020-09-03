import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Feather} from '@expo/vector-icons';

const weatherOptions = {
    Clouds: {
        iconName: "cloud",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "Clouds",
        subtitle: "Oh, it's cloudy. It'll be little gloomy."
    },
    Thunderstorm: {
        iconName: "cloud-lightning",
        gradient: ["#e9d362", "#333333"],
        title: "Thunderstorm",
        subtitle: "Watch out for lightning!"
    },
    Drizzle: {
        iconName: "droplet",
        gradient: ["#333333", "#00d2ff"],
        title: "Drizzle",
        subtitle: "Don't forget to take an umbrella."
    },
    Rain: {
        iconName: "cloud-rain",
        gradient: ["#373B44", "#4286f4"],
        title: "Rain",
        subtitle: "Don't forget to take an umbrella, really."
    },
    Snow: {
        iconName: "cloud-snow",
        gradient: ["#1c92d2", "#f2fcfe"],
        title: "Snow",
        subtitle: "It's white world~!"
    },
    Mist: {
        iconName: "align-justify",
        gradient: ["#ACB6E5", "#74ebd5"],
        title: "Mist",
        subtitle: "Be careful if you drive your car!"
    },
    Haze: {
        iconName: "align-justify",
        gradient: ["#ACB6E5", "#74ebd5"],
        title: "Haze",
        subtitle: "Be careful if you drive your car!"
    },
    Dust: {
        iconName: "loader",
        gradient: ["#3E5151", "#DECBA4"],
        title: "Dust",
        subtitle: "Please take your mask..."
    },
    Clear: {
        iconName: "sun",
        gradient: ["#FFD200", "#F7971E"],
        title: "Sunny",
        subtitle: "Oh happy day!"
    }
}

export default function Weather({temp, condition}) {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <Feather name={weatherOptions[condition].iconName} size={86} color="white" />
                <Text style={styles.temp}>{temp}ºC</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    )}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Haze", "Dust", "Clear", "Clouds"]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    temp:{
        fontSize: 32,
        marginTop: 20,
        color:"white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: 50
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300"
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 20
    }
})