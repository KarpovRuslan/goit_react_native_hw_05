import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Posts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
});

export default PostsScreen;
