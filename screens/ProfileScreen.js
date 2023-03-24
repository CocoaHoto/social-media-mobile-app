import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

function ProfileScreen({ navigation }) {
    signOutHandler = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigation.navigate('SignIn')
        }).catch((error) => {
            // An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Error: ' + errorMessage)
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
                <Text style={styles.text}>Swathi Shanmugasundaram</Text>
            </View >

            <Text style={styles.aboutUser}>
                Life is wonderful.
            </Text>

            <View style={styles.userInfoItem}>
                <TouchableOpacity style={styles.userBtn} onPress={() => { }}>
                    <Text style={styles.userBtnTxt}>Edit Profile</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.userInfoWrapper}>
                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>30</Text>
                    <Text style={styles.userInfoSubTitle}>Posts</Text>
                </View>
                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>50</Text>
                    <Text style={styles.userInfoSubTitle}>Followers</Text>
                </View>
                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>100</Text>
                    <Text style={styles.userInfoSubTitle}>Following</Text>
                </View>
            </View>

            <View>
                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>Bio</Text>
                    <Text style={styles.userInfoSubTitle}>Describe Yourself</Text>
                </View>
                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>Details</Text>
                    <Text style={styles.userInfoSubTitle}>From</Text>
                    <Text style={styles.userInfoSubTitle}>Current City</Text>
                    <Text style={styles.userInfoSubTitle}>Workplace</Text>
                    <Text style={styles.userInfoSubTitle}>Education</Text>
                    <Text style={styles.userInfoSubTitle}>Relationship status</Text>
                </View>
                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>Friends</Text>
                    <Text style={styles.userInfoSubTitle}>...........</Text>
                </View>
                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>What's on your mind?</Text>
                    <TouchableOpacity style={styles.userBtn} onPress={() => { }}>
                        <Text style={styles.userBtnTxt}>Create your post here</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>My Posts</Text>
                    <Text style={styles.userInfoSubTitle}>............</Text>
                </View>
            </View>
        </ScrollView>
    );

}

export default ProfileScreen;

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
})
