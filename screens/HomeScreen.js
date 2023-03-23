// Importing required modules
import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text, Dimensions, Image } from 'react-native';
import { signOut } from "firebase/auth";
import { auth } from "../firebase"

// Getting device's height and width
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

// HomeScreen component
const HomeScreen = ({ navigation }) => {
    // Function to signout user
    const signOutHandler = () => {
        signOut(auth).then(() => {
          // Sign-out successful.
          navigation.navigate('Login')
        }).catch((error) => {
          // An error happened.
          const errorCode = error.code;
          const errorMessage = error.message;
          alert('Error: '+ errorMessage)
        });
    }
 
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>

            {/* Touchable Highlight container */}
            <View style={styles.buttonContainer}>
                <TouchableHighlight 
                    onPress={() => { 
                      signOutHandler()
                    }}
                >
                    <Image
                    source={require('../assets/logout.png')}
                    style={styles.logo}
                    />
                </TouchableHighlight>
            </View>
        </View>
    );
};

// Styles 
const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 25,
    },
    logo: {
        height: 70,
        width: 70,
    },
});

// Exporting HomeScreen component
export default HomeScreen;