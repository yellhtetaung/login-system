import { StyleSheet, Text, View } from "react-native";

import Login from "./screen/Login";
import Signup from "./screen/Signup";
import Welcome from "./screen/Welcome";

export default function App() {
  // return <Login />;
  // return <Signup />;
  return <Welcome />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
