import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import PostScreen from "./screens/PostScreen";
import MessageScreen from "./screens/MessageScreen";
import NotificationScreen from "./screens/NotificationScreen";
import ProfileScreen from "./screens/ProfileScreen";




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const NavigationStack = createStackNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;

          if (routeName === "Home") {
            iconName = focused ? "home-sharp" : "home-outline";
          }else if (routeName === "Post") {
            iconName = "add-circle-outline";
          } else if (routeName === "Message") {
            iconName = focused
              ? "chatbox-ellipses"
              : "chatbox-ellipses-outline";
          } else if (routeName === "Notification") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (routeName === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={28} color={color} />;
        },
        tabBarActiveTintColor: "#9933FF",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { height: 80, padding: 10 },
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
    <Tab.Screen name={"Home"} component={HomeScreen} />
     <Tab.Screen name={"Message"} component={MessageScreen} />
      <Tab.Screen name={"Post"} component={PostScreen} />
      <Tab.Screen name={"Notification"} component={NotificationScreen} />
      <Tab.Screen name={"Profile"} component={ProfileScreen} />

      {/* Add more tabs here if needed */}
    </Tab.Navigator>
  );
};

const App = () => {
  const AppStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
  <NavigationStack.Navigator initialRouteName="Login">
    <NavigationStack.Screen name="Login" component={SignInScreen} />
    <NavigationStack.Screen name="SignUp" component={SignUpScreen} />
    <NavigationStack.Screen
      name="Home"
      component={TabStack}
      options={{
        headerTitleAlign: "center",
        title: "Social Media",
        headerTitleStyle: {
          color: "#9933FF",
          fontSize: 30,
          marginLeft: 10,
        },
        headerStyle: {
          shadowColor: "#fff",
          backgroundColor: "#fff",
          elevation: 0,
        },
      }}
    />
  </NavigationStack.Navigator>
</NavigationContainer>
  )
    };
  
export default App;
