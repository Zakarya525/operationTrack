import React from "react";
import {
  Button,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome";
import { usePatient } from "../../context/Patient";
import { colors } from "../../utils";

const { width } = Dimensions.get("window");

const PatientForm = () => {
  const navigation = useNavigation();
  const { addPatient } = usePatient();

  const handleSubmit = (values) => {
    addPatient(values);
    navigation.navigate("Home");
  };

  const validationSchema = yup.object({
    date: yup.string().required("Date is required"),
    day: yup.string().required("Day is required"),
    otTable: yup.string().required("OT Table is required"),
    patientName: yup.string().required("Patient Name is required"),
    diagnosis: yup.string().required("Diagnosis is required"),
    procedure: yup.string().required("Procedure is required"),
    consultantName: yup.string().required("Consultant Name is required"),
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}
        >
          <Icon
            name="arrow-left"
            size={width * 0.05}
            color={colors.primaryColor}
          />
        </TouchableOpacity>
        <Formik
          initialValues={{
            date: "",
            day: "",
            otTable: "",
            patientName: "",
            diagnosis: "",
            procedure: "",
            consultantName: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps) => (
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Date (dd-mm-yyyy)"
                  onChangeText={formikProps.handleChange("date")}
                  value={formikProps.values.date}
                />
              </View>
              {formikProps.errors.date && formikProps.touched.date && (
                <Text style={styles.error}>{formikProps.errors.date}</Text>
              )}

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Day"
                  onChangeText={formikProps.handleChange("day")}
                  value={formikProps.values.day}
                />
              </View>
              {formikProps.errors.day && formikProps.touched.day && (
                <Text style={styles.error}>{formikProps.errors.day}</Text>
              )}
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="OT Table"
                  onChangeText={formikProps.handleChange("otTable")}
                  value={formikProps.values.otTable}
                />
              </View>
              {formikProps.errors.otTable && formikProps.touched.otTable && (
                <Text style={styles.error}>{formikProps.errors.otTable}</Text>
              )}
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Patient Name"
                  onChangeText={formikProps.handleChange("patientName")}
                  value={formikProps.values.patientName}
                />
              </View>
              {formikProps.errors.patientName &&
                formikProps.touched.patientName && (
                  <Text style={styles.error}>
                    {formikProps.errors.patientName}
                  </Text>
                )}
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Diagnosis"
                  onChangeText={formikProps.handleChange("diagnosis")}
                  value={formikProps.values.diagnosis}
                />
              </View>
              {formikProps.errors.diagnosis &&
                formikProps.touched.diagnosis && (
                  <Text style={styles.error}>
                    {formikProps.errors.diagnosis}
                  </Text>
                )}
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Procedure"
                  onChangeText={formikProps.handleChange("procedure")}
                  value={formikProps.values.procedure}
                />
              </View>
              {formikProps.errors.procedure &&
                formikProps.touched.procedure && (
                  <Text style={styles.error}>
                    {formikProps.errors.procedure}
                  </Text>
                )}
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Consultant Name"
                  onChangeText={formikProps.handleChange("consultantName")}
                  value={formikProps.values.consultantName}
                />
              </View>
              {formikProps.errors.consultantName &&
                formikProps.touched.consultantName && (
                  <Text style={styles.error}>
                    {formikProps.errors.consultantName}
                  </Text>
                )}

              <TouchableOpacity
                style={styles.button}
                onPress={formikProps.handleSubmit}
              >
                <Text style={styles.buttonText}>Add Patient</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  formContainer: {
    marginTop: width * 0.3,
    paddingHorizontal: width * 0.05,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: width * 0.05,
    borderRadius: width * 0.04,
    backgroundColor: "#fbfcf8",
    paddingHorizontal: width * 0.1,
  },
  input: {
    height: width * 0.1,
    paddingHorizontal: width * 0.02,
  },
  error: {
    color: "red",
    marginBottom: width * 0.02,
  },
  button: {
    backgroundColor: colors.primaryColor,
    paddingVertical: width * 0.03,
    borderRadius: width * 0.04,
    alignItems: "center",
    justifyContent: "center",
    marginTop: width * 0.05,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Urbanist_600SemiBold",
    fontSize: width * 0.04,
  },
  back: {
    position: "absolute",
    top: Platform.OS === "ios" ? width * 0.1 : width * 0.09,
    left: width * 0.02,
    zIndex: 1,
  },
});

export default PatientForm;
