import * as React from 'react';
import { AppRegistry, StyleSheet,TouchableHighlight, View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import { signOut } from "firebase/auth";
import { auth } from "../firebase"

import Ionicons from 'react-native-vector-icons/Ionicons';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

onPressLike = () =>{
  
}


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
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.userInfo}>
          
          <Image 
            source={require('../assets/users/user-3.jpg')}
            style={styles.uerImage}           
          />
          <View style={styles.userInfoText}>
            <Text style={styles.userName}>Jenny Doe</Text>
            <Text style={styles.postTime}>4 hours ago</Text>
          </View>
          

        </View>
        <Text style={styles.postText}>Hello this is a test post</Text>

        <Image 
            source={require('../assets/posts/post-img-2.jpg')}
            style={styles.postImg}           
        />

        <View style={styles.interactionWrapper}>
          <TouchableOpacity style={styles.interaction}>
            <Ionicons name="heart-outline" size={25} />
            <Text style={styles.interactionText}>Like</Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.interaction}>
            <Ionicons name="md-chatbubble-outline" size={25} />
            <Text style={styles.interactionText}>Comment</Text>

          </TouchableOpacity>

        </View>


      </View>

      <View style={styles.card}>
        <View style={styles.userInfo}>
          
          <Image 
            source={require('../assets/users/user-1.jpg')}
            style={styles.uerImage}           
          />
          <View style={styles.userInfoText}>
            <Text style={styles.userName}>Kevin Hart</Text>
            <Text style={styles.postTime}>4 hours ago</Text>
          </View>
          

        </View>
        <Text style={styles.postText}>Hello this is a test post</Text>

        <View style={styles.divider}></View>

        <View style={styles.interactionWrapper}>
          <TouchableOpacity style={styles.interaction} onPress={this.onPressLike}>
            <Ionicons name="heart-outline" size={25} />
            <Text style={styles.interactionText}>Like</Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.interaction}>
            <Ionicons name="md-chatbubble-outline" size={25} />
            <Text style={styles.interactionText}>Comment</Text>

          </TouchableOpacity>

        </View>


      </View>

      {/* Logout  */}
      {/* <View style={styles.buttonContainer}>
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
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    marginTop: 100,
    // justifyContent: 'center',
    backgroundColor: '#fff', 
    padding: 20
  },
  card: {
    backgroundColor: '#f8f8f8', 
    width: deviceWidth-35,
    marginBottom: 20,
    borderRadius: 10,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
  },
  uerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  userInfoText: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  postTime: {
    fontSize: 12,
    fontFamily: 'Arial',
    color: '#666',
  },
  postText: {
    fontSize: 14,
    fontFamily: 'Arial',
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 15,
  },
  postImg: {
    width: deviceWidth-35,
    height: 250,
  },
  divider: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    width: deviceWidth-35,
    alignSelf: 'center',
    marginTop: 15,
  },
  interactionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  interaction: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 5,
    // backgroundColor: ${props => props.active ? '#2e64e515' : 'transparent'},
  },
  interactionText: {
    fontSize: 12,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    // color: ${props => props.active ? '#2e64e5' : '#333'};
    color: '#333',
    marginTop: 5,
    marginLeft: 5,
  },
  buttonContainer: {
    marginTop: 25,
  },
  logo: {
    height: 70,
    width: 70,
  },
