import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = ({ route }) => {
  const { email } = route.params;
  return (
    <View>
      <Text>{email}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
