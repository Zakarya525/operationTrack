import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../utils";
import { PrimaryHeader } from "../components/Headers";
import BlueCircle from "../components/BlueCirlces";
import { PrimaryButton } from "../components/Buttons";
import Loader from "../components/Loader/Loader";

const UserGuide = () => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const onPress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <BlueCircle />
        {loading ? (
          <Loader />
        ) : (
          <Image style={styles.img} source={require("../images/dr2.png")} />
        )}
      </View>
      <View style={styles.footer}>
        <View style={styles.head}>
          <PrimaryHeader text="Let's start living healthy and well with us right now!" />
        </View>
        <View style={styles.foot}>
          <PrimaryButton title="Get Started" onPress={onPress} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flex: 1.2,
    alignItems: "center",
  },
  footer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  img: {
    marginTop: 50,
    width: 700,
    height: 700,
    resizeMode: "contain",
    position: "absolute",
    zIndex: 1,
  },
  img2: {
    marginTop: 20,
    width: 400,
    height: 1000,
    resizeMode: "contain",
    position: "absolute",
    zIndex: 1,
  },

  head: {
    flex: 3,
  },
  med: {
    flex: 0.5,
  },
  foot: {
    flex: 2,
  },
});

export default UserGuide;
