import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome5";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../../firebaseConfig";
import { styles } from "./style";
import { colors } from "../../utils";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const Login = () => {
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = ({ email, password }) => {
    console.log(email, password);
    signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          SecureStore.setItemAsync(
            "authToken",
            userCredential.user.accessToken
          );
          navigation.navigate("Home", { email: userCredential.user.email });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {(formikProps) => (
        <View style={styles.container}>
          <Icon
            name="hand-holding-medical"
            size={100}
            color={colors.primaryColor}
          />
          <Text style={styles.title}>Login to Your Account</Text>
          <View style={styles.inputContainer}>
            <Icon name="user" size={21} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={formikProps.handleChange("email")}
              value={formikProps.values.email}
            />
          </View>
          {formikProps.errors.email && formikProps.touched.email && (
            <Text style={styles.error}>{formikProps.errors.email}</Text>
          )}
          <View style={styles.inputContainer}>
            <Icon name="lock" size={21} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={formikProps.handleChange("password")}
              value={formikProps.values.password}
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Icon
                name={isPasswordVisible ? "eye-slash" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          {formikProps.errors.password && formikProps.touched.password && (
            <Text style={styles.error}>{formikProps.errors.password}</Text>
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={formikProps.handleSubmit}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.orContinueWith}>
              Don't have an account?
              <Text style={styles.forgotPasswordText}> Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
