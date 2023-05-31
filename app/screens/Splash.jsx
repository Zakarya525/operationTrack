import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Header } from "../components/Headers";
import Loader from "../components/Loader/Loader";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const Splash = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate("UserGuide");
  }, 4000);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Icon
          style={styles.icon}
          name="hand-holding-medical"
          size={width * 0.1}
          color="#fff"
        />
        <Header text="OperationTrack" />
      </View>
      <Loader />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    paddingHorizontal: width * 0.03,
    width: width * 0.15,
    height: width * 0.15,
    marginRight: width * 0.03,
    borderRadius: width * 0.075,
    backgroundColor: "#246BFD",
  },
});
