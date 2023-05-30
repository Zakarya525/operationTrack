import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../screens/Authentication/style";
import { Formik } from "formik";
import * as yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome";
import { usePatient } from "../../context/Patient";
import { colors } from "../../utils";

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
    <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={100}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Icon name="arrow-left" size={20} color={colors.primaryColor} />
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
          <View style={styles.container}>
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
                placeholder="Daignosis"
                onChangeText={formikProps.handleChange("diagnosis")}
                value={formikProps.values.diagnosis}
              />
            </View>
            {formikProps.errors.diagnosis && formikProps.touched.diagnosis && (
              <Text style={styles.error}>{formikProps.errors.diagnosis}</Text>
            )}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Procedure"
                onChangeText={formikProps.handleChange("procedure")}
                value={formikProps.values.procedure}
              />
            </View>
            {formikProps.errors.procedure && formikProps.touched.procedure && (
              <Text style={styles.error}>{formikProps.errors.procedure}</Text>
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

            <Button title="Add Patient" onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default PatientForm;
