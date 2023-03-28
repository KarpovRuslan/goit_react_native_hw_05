import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const CreatePostsScreen = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [isFocus, setIsFocus] = useState(true);
  const [data, setData] = useState(false);

  const handleTitle = (text) => setTitle(text);
  const handleLocation = (text) => setLocation(text);

  const handleFocus = () => {
    setIsFocus(false);
  };

  const clearPostData = () => {
    setLocation("");
    setTitle("");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} />
            <TouchableOpacity activeOpacity={0.7} style={styles.addPhotoButton}>
              <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
          <Text style={styles.downloadTitle}>Download photo</Text>

          <View style={{ paddingBottom: isFocus ? 100 : 20 }}>
            <TextInput
              onChangeText={handleTitle}
              onFocus={handleFocus}
              value={title}
              placeholder="Name..."
              placeholderTextColor="#BDBDBD"
              style={styles.inputTitle}
            />
            <View style={{ position: "relative" }}>
              <Feather
                name="map-pin"
                size={20}
                color="#BDBDBD"
                style={{ position: "absolute", bottom: 45 }}
              />
              <TextInput
                onChangeText={handleLocation}
                value={location}
                placeholder="Location..."
                placeholderTextColor="#BDBDBD"
                style={styles.inputLocation}
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                ...styles.button,
                backgroundColor: data ? "#FF6C00" : "#F6F6F6",
              }}
              disabled={data ? false : true}
              onPress={() => clearPostData()}
            >
              <Text style={styles.buttonText}>Create Publication</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.trashIcon} onPress={clearPostData}>
              <Feather name="trash-2" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "#F6F6F6",
  },
  addPhotoButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#ffffff",
    borderRadius: 50,
  },
  downloadTitle: {
    marginBottom: 26,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  inputTitle: {
    height: 50,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  inputLocation: {
    height: 50,
    marginTop: 16,
    marginBottom: 28,
    paddingLeft: 28,
    fontSize: 16,
    lineHeight: 19,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  button: {
    backgroundColor: "#F6F6F6",
    paddingVertical: 16,
    borderRadius: 100,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    textAlign: "center",
  },
  trashIcon: {
    alignItems: "center",
    marginTop: 120,
  },
});

export default CreatePostsScreen;
