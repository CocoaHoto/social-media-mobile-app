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
            <View style={styles.buttonContainer}>
                <TouchableHighlight style={styles.userBtn}
                    onPress={() => {
                        navigation.navigate('Profile')
                    }}
                >
                    <Text style={styles.userBtnTxt}>Profile</Text>
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
  userBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#9933FF',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: '#9933FF',
  },
})