import * as React from 'react';
import { StyleSheet,TouchableHighlight, View, Text, Dimensions} from 'react-native';
import { signOut } from "firebase/auth";
import { auth } from "../firebase"


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


function HomeScreen({ navigation }) {
  signOutHandler = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigation.navigate('SignIn')
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

      <View style={styles.buttonContainer}>
                <TouchableHighlight 
                    onPress={() => { 
                      signOutHandler()
                    }}
                >
                        <View style={styles.button}> 
                            <Text style={styles.buttonText}>Sign out</Text>
                        </View>
                </TouchableHighlight>
            </View>
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
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
})
