import * as React from 'react';
import  {useState} from 'react';
import { View, Text, ScrollView,StyleSheet, Image, TextInput, Dimensions, TouchableHighlight } from 'react-native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


function SignInScreen({ navigation }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    signInHandler = () => {
        signInWithEmailAndPassword(auth, username,  password)
                        .then((userCredential) => {
                            navigation.navigate('Home')
                        })
                        .catch((error) => {
                          const errorCode = error.code;
                          const errorMessage = error.message;
                          alert('Error: '+ errorMessage)
                        }); 
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Image
                    source={require('../assets/rn-social-logo.png')}
                    style={styles.logo}
                />
            </View>

            <View>
                <Text style={styles.text}>Social Media App</Text>
            </View >
                    
            <View style={styles.LogoTextInputContainer}>
                <View style={styles.LogoContainer}>
                    <Image
                        source={require('../assets/icons8-customer-80.png')}
                        style={styles.usernameLogo}
                    />
                </View>
                <View style={styles.TextInputContainer}> 
                    <TextInput style={styles.TextInput}
                        placeholder="Username"
                        onChangeText={(username) => setUsername(username)}
                        value={username}
                    /> 
                </View>
            </View>

            <View style={styles.LogoTextInputContainer}>
                <View style={styles.LogoContainer}>
                    <Image
                        source={require('../assets/icons8-lock-150.png')}
                        style={styles.passwordLogo}
                    />
                </View>
                <View style={styles.TextInputContainer}> 
                    <TextInput style={styles.TextInput}
                        placeholder="Password"
                        secureTextEntry= {true}
                        onChangeText={(password) => setPassword(password)}
                        value={password}
                    /> 
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableHighlight 
                    onPress={() => { 
                        signInHandler()
                    }}
                >
                        <View style={styles.button}> 
                            <Text style={styles.buttonText}>Sign In</Text>
                        </View>
                </TouchableHighlight>
            </View>

            <View style={styles.LinkButton}> 
                <TouchableHighlight
                    onPress={() => { 
                        
                    }}
                >
                    <Text style={styles.LinkButtonText}>Forget Password?</Text>
                </TouchableHighlight>
            </View>

            <View style={styles.LinkButton}> 
                <TouchableHighlight
                    onPress={() => { 
                        navigation.navigate('SignUp')
                    }}
                >
                    <Text style={styles.LinkButtonText}>Don't have an account? Create here</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    LogoTextInputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    LogoContainer: {
        height: 50,
        width: 1*deviceWidth/8,
        borderWidth: 1,
        borderColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    usernameLogo: {
        height: 30,
        width: 30,
    },
    passwordLogo: {
        height: 30,
        width: 30,
    },
    TextInput: {
        margin: 10,
        fontSize: 15,
    },
    TextInputContainer: {
        height: 50,
        width: 5*deviceWidth/8,
        borderWidth: 1,
        borderColor: 'lightgray',
        justifyContent: 'center',

    },
    buttonContainer: {
        marginTop: 25,
    },
    button: {
        backgroundColor: 'blue',
        height: 50,
        width: 6*deviceWidth/8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    LinkButton: {
        marginTop: 25
    },
    LinkButtonText: {
        fontWeight: 'bold',
        color: 'blue',
    }

    
  });