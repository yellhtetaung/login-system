import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

import Colors from "../config/colors";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={[styles.container, { paddingLeft: 15, paddingRight: 15 }]}>
        <Image
          style={styles.backgroundImg}
          source={require("../assets/img/expo-bg2.png")}
        />
        <View style={styles.welcomeContainer}>
          <Text style={styles.pageTitle}>Welcome! Buddy</Text>
          <Text style={styles.subTitle}>Richard Simpon</Text>
          <Text style={styles.subTitle}>richsimps@gmail.com</Text>
          <View style={styles.logo}>
            <Image
              resizeMethod="resize"
              style={styles.logoImg}
              source={require("../assets/img/expo-bg1.png")}
            />
          </View>
        </View>

        <View style={{ width: "100%", marginTop: 10, marginBottom: 10 }}>
          <View style={styles.line}></View>
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LogOut</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },

  welcomeContainer: {
    paddingTop: 20,
  },

  pageTitle: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.brand,
    padding: 10,
  },

  subTitle: {
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 1,

    marginVertical: 5,
  },

  backgroundImg: {
    minWidth: "100%",
    height: "50%",
  },

  logo: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 100,
    overflow: "hidden",
    borderColor: Colors.darkLight,
    alignSelf: "center",

    marginTop: 10,
  },

  logoImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  line: {
    width: "95%",
    height: 1,
    alignSelf: "center",
    backgroundColor: Colors.darkLight,
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
});
