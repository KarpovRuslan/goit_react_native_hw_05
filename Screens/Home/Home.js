import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import DefaultScreen from "../nestedScreens/DefaultScreen";

const Tab = createBottomTabNavigator();

export const Home = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarShowLabel: false,
          headerTitleAlign: "center",
          headerRightContainerStyle: { paddingRight: 20 },
          tabBarIconStyle: { marginLeft: 45 },
          tabBarStyle: { height: 83, paddingBottom: 10, borderTopWidth: 1 },
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={size} color={color} />
          ),
          headerRight: ({ focused, color }) => (
            <Feather
              name="log-out"
              size={24}
              color="#BDBDBD"
              onPress={() => navigation.navigate("Login")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: { display: "none" },
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("DefaultScreen")}
                activeOpacity={0.6}
                style={{ paddingLeft: 16 }}
              >
                <Feather name="arrow-left" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            );
          },
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.addButton}>
              <Ionicons name="md-add" size={size} color="#fff" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIconStyle: { marginRight: 45 },
          tabBarStyle: { height: 83, paddingBottom: 10, borderTopWidth: 1 },
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  addButton: {
    backgroundColor: "#FF6C00",
    height: 40,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  tabButton: {},
});

export default Home;
