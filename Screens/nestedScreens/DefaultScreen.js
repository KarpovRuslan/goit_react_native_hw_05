import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { EvilIcons, Feather } from "@expo/vector-icons";

const DefaultScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      {posts.length > 0 && (
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.postStyle}>
              <Image source={{ uri: item.photo }} style={styles.image} />
              <Text style={styles.postTitle}>{item.title}</Text>
              <View style={styles.bottomFrame}>
                <View style={styles.commentBox}>
                  <Feather
                    name="message-circle"
                    size={24}
                    color="#BDBDBD"
                    onPress={() => navigation.navigate("Comments")}
                  />
                  <Text style={styles.commentText}>0</Text>
                </View>
                <View style={styles.locBox}>
                  <EvilIcons
                    name="location"
                    size={24}
                    color="#BDBDBD"
                    onPress={() => {
                      navigation.navigate("Map", item.geolocation);
                    }}
                  />
                  <Text style={styles.locationText}>{item.locationName}</Text>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  bottomFrame: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  commentBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
    marginLeft: 6,
  },
  locBox: {
    flexDirection: "row",
    alignItems: "center",
    //marginLeft: 49,
  },
  locationText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginLeft: 4,
  },
  postTitle: {
    marginTop: 5,
    alignSelf: "flex-start",
    fontSize: 16,
    fontWeight: 500,
  },
  image: { height: 240, width: "100%", borderRadius: 10 },
  postStyle: {
    marginBottom: 10,
    marginHorizontal: 16,
  },
});

export default DefaultScreen;
