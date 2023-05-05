import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { signOut, onAuthStateChanged  } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


function EditProfileScreen({ navigation }) {

    const [userData, setUserData] = useState();
    const [uid, setUID] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [status, setStatus] = useState();
    const [bio, setBio] = useState();
    const [city, setCity] = useState();
    const [education, setEducation] = useState();

    async function getData() {
        getUID();

        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setUserData(docSnap.data());
            console.log("Document data:", docSnap.data());
        } else {
        // docSnap.data() will be undefined in this case
            console.log("No such document!");
    }
    };

    async function setData() {
        getUID();

        await setDoc(doc(db, "users", uid), {
            firstName: firstName,
            lastName: lastName,
            status: status,
            bio: bio,
            currentCity: city,
            education: education,
            followers: 0,
            following: 0,
            posts: 0
          });

          navigation.navigate('Profile');
    };

    async function getUID() {
        setUID(auth.currentUser.uid);
        console.log(uid);
    };


    useEffect(() => {
        getData();
    });

    signOutHandler = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Error: ' + errorMessage)
        }).finally(() => {
            navigation.navigate('Login')
        });
        

    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Image
                    source={{ uri: 'https://pixy.org/src2/573/thumbs350/5734382.jpg' }}
                    style={styles.logo}
                />
            </View>

            <View>
                <Text style={styles.text}>{userData && userData.firstName} {userData && userData.lastName}</Text>
            </View >

            <View style={styles.LogoTextInputContainer}>
              <View style={styles.TextInputContainer}> 
                  <TextInput style={styles.TextInput}
                      placeholder="Firstname"
                      onChangeText={(firstName) => setFirstName(firstName)}
                      value={firstName}
                  /> 
              </View>
          </View> 

          <View style={styles.LogoTextInputContainer}>
              <View style={styles.TextInputContainer}> 
                  <TextInput style={styles.TextInput}
                      placeholder="Lastname"
                      onChangeText={(lastName) => setLastName(lastName)}
                      value={lastName}
                  /> 
              </View>
          </View> 

          <View style={styles.LogoTextInputContainer}>
              <View style={styles.TextInputContainer}> 
                  <TextInput style={styles.TextInput}
                      placeholder="Status"
                      onChangeText={(status) => setStatus(status)}
                      value={status}
                  /> 
              </View>
          </View> 

          <View style={styles.LogoTextInputContainer}>
              <View style={styles.TextInputContainer}> 
                  <TextInput style={styles.TextInput}
                      placeholder="Bio"
                      onChangeText={(bio) => setBio(bio)}
                      value={bio}
                  /> 
              </View>
          </View> 

          <View style={styles.LogoTextInputContainer}>
              <View style={styles.TextInputContainer}> 
                  <TextInput style={styles.TextInput}
                      placeholder="City"
                      onChangeText={(city) => setCity(city)}
                      value={city}
                  /> 
              </View>
          </View> 

          <View style={styles.LogoTextInputContainer}>
              <View style={styles.TextInputContainer}> 
                  <TextInput style={styles.TextInput}
                      placeholder="Education"
                      onChangeText={(education) => setEducation(education)}
                      value={education}
                  /> 
              </View>
          </View> 

            <View>
                <View style={styles.userInfoItem}>
                <TouchableOpacity style={styles.userBtn} onPress={() => { setData() }}>
                    <Text style={styles.userBtnTxt}>Submit</Text>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    );

}

export default EditProfileScreen;

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
    buttonContainer: {
        marginTop: 25,
    },
    logo: {
        height: 70,
        width: 70,
    },

    userImg: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    aboutUser: {
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
        textAlign: 'center', marginBottom: 10,
    },
    userBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
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
    userInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
    },
    userInfoItem: {
        justifyContent: 'center',
    },
    userInfoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    userInfoSubTitle: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
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
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
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
})
