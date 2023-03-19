import * as React from 'react';
import  {useState} from 'react';
import { View, Text, ScrollView,StyleSheet, Image, TextInput, Dimensions, TouchableHighlight } from 'react-native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


function SignInScreen({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    signInHandler = () => {
        signInWithEmailAndPassword(auth, email,  password)
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
                    source={require('../assets/Logo.png')}
                    style={styles.logo}
                />
            </View>

            <View>
                <Text style={styles.text}>Log in to your account</Text>
            </View>
                    
            <View style={styles.LogoTextInputContainer}>
                <View style={styles.LogoContainer}>
                    <Image
                        source={require('../assets/email.png')}
                        style={styles.emailLogo}
                    />
                </View>
                <View style={styles.TextInputContainer}> 
                    <TextInput style={styles.TextInput}
                        placeholder="Email"
                        onChangeText={(email) => setEmail(email)}
                        value={email}
                    /> 
                </View>
            </View>

            <View style={styles.LogoTextInputContainer}>
                <View style={styles.LogoContainer}>
                    <Image
                        source={require('../assets/password_locked.png')}
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
                    <Text style={styles.LinkButtonText}>Don't have an account?</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
        backgroundColor: 'white'
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontSize: 24,
        marginTop: 10,
        marginBottom: 10,
        color: '#9933FF',
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
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    emailLogo: {
        height: 50,
        width: 50,
    },
    passwordLogo: {
        height: 50,
        width: 50,
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
        borderTopRightRadius: 15, 
        borderBottomRightRadius: 15,

    },
    buttonContainer: {
        marginTop: 25,
    },
    button: {
        backgroundColor: '#9933FF',
        height: 50,
        width: 6*deviceWidth/8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
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
        color: '#9933FF',
    }

    
  });