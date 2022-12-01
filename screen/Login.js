import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Colors from "../config/colors";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        resizeMethod="resize"
        style={styles.logoImage}
        source={require("../assets/img/expo-bg1.png")}
      />
      <Text style={styles.pageTitle}>Flower Crib</Text>
      <Text style={styles.subTitle}>Account Login</Text>
      <View style={styles.formContainer}>
        <View style={styles.formInputView}>
          <Text style={styles.textLabel}>Email Address</Text>
          <TextInput
            style={styles.textInput}
            placeholder={"example@gmail.com"}
            placeholderTextColor={Colors.darkLight}
          />
        </View>

        <View style={styles.formInputView}>
          <Text style={styles.textLabel}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder={"* * * * * * * *"}
            placeholderTextColor={Colors.darkLight}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.formInputView}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formInputView}>
          <View style={styles.line}></View>
        </View>

        <View style={styles.formInputView}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: Colors.green }]}
          >
            <Text style={styles.buttonText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.formInputView, flex]}>
          <Text style={[styles.textLabel, { textAlign: "center" }]}>
            Don't have an account already?
          </Text>
          <Text style={{ fontSize: 15, color: Colors.brand, marginLeft: 5 }}>
            Signup
          </Text>
        </View>
      </View>
    </View>
  );
}

const flex = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "center",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },

  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },

  formInputView: {
    marginTop: 10,
    marginBottom: 10,
  },

  logoImage: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },

  pageTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.brand,
    padding: 10,
  },

  subTitle: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 1,
  },

  textLabel: {
    fontSize: 15,
    paddingLeft: 10,
    paddingBottom: 5,
  },

  textInput: {
    width: "95%",
    alignSelf: "center",
    fontSize: 17,
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.secondary,
    borderRadius: 3,
  },

  button: {
    width: "95%",
    backgroundColor: Colors.brand,
    alignSelf: "center",
    borderRadius: 5,

    paddingVertical: 15,
  },

  buttonText: {
    color: Colors.primary,
    fontSize: 18,
    textAlign: "center",
  },

  line: {
    width: "95%",
    height: 1,
    alignSelf: "center",
    backgroundColor: Colors.darkLight,
  },
});
