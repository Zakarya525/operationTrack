import { StyleSheet } from "react-native";
import { colors } from "../utils";

export const styles = StyleSheet.create({
  logoutButton: {
    position: "absolute",
    top: 25,
    right: 0,
    padding: 10,
  },
  logoutButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Urbanist_400Regular",
    textAlign: "center",
  },
  addPatientContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 20,
  },
  heading: {
    fontSize: 18,
    fontFamily: "Urbanist_600SemiBold",
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: colors.primaryColor,
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Urbanist_400Regular",
    textAlign: "center",
  },
  headingLarge: {
    fontSize: 25,
    fontFamily: "Urbanist_700Bold",
    marginTop: 30,
    marginBottom: 20,
    marginStart: 10,
  },

  headingMedium: {
    fontSize: 20,
    fontFamily: "Urbanist_700Bold",
    marginTop: 10,
    marginStart: 10,
    marginBottom: 5,
  },

  card: {
    backgroundColor: "#fff",
    width: 270,
    height: 100,
    marginTop: -80,
    marginStart: 43,
    marginEnd: 30,
    borderRadius: 15,
  },

  innerTextStyle: {
    fontFamily: "Urbanist_700Bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
  },
  mealTypeView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  mealTypeText: {
    fontFamily: "Urbanist_700Bold",
    marginTop: 10,
  },
});
