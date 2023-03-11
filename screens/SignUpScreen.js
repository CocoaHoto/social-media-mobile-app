import * as React from 'react';
import  {useState} from 'react';
import { View, Text, ScrollView,StyleSheet, Image, TextInput, Dimensions, TouchableHighlight } from 'react-native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


function SignUpScreen({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();

    signInHandler = () => {
        createUserWithEmailAndPassword(auth, this.state.username,  this.state.password)
                        .then((userCredential) => {
                            signInHandler()
                          })
                        .catch((error) => {
                          const errorCode = error.code;
                          const errorMessage = error.message;
                          // ..
                        });
    }

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
                <Text style={styles.text}>Create an account</Text>
            </View >
                    
            <View style={styles.LogoTextInputContainer}>
                <View style={styles.LogoContainer}>
                    <Image
                        source={require('../assets/icons8-customer-80.png')}
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

            <View style={styles.LogoTextInputContainer}>
                <View style={styles.LogoContainer}>
                    <Image
                        source={require('../assets/icons8-lock-150.png')}
                        style={styles.passwordLogo}
                    />
                </View>
                <View style={styles.TextInputContainer}> 
                    <TextInput style={styles.TextInput}
                        placeholder="Repeat Password"
                        secureTextEntry= {true}
                        onChangeText={(password) => setPassword(password)}
                        value={password}
                    /> 
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableHighlight 
                    onPress={() => { 
                        navigation.navigate('SignIn')
                    }}
                >
                        <View style={styles.button}> 
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </View>
                </TouchableHighlight>
            </View>


            <View style={styles.LinkButton}> 
                <TouchableHighlight
                    onPress={() => { 
                        navigation.navigate('SignIn')
                    }}
                >
                    <Text style={styles.LinkButtonText}>Have an account? Sign in</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
}

export default SignUpScreen;

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
    emailLogo: {
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
