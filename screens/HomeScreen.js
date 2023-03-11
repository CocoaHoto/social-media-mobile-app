import * as React from 'react';
import { StyleSheet,TouchableHighlight, View, Text, Dimensions, Image} from 'react-native';
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
                    <Image
                    source={require('../assets/logout.png')}
                    style={styles.logo}
                    />
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
  logo: {
    height: 70,
    width: 70,
  },
})
