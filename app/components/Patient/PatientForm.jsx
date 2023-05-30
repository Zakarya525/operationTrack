// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import { addDoc, collection } from "firebase/firestore";
// import { FIRESTORE_DB } from "../../../firebaseConfig";
// import { colors } from "../../utils";
// import { Formik, FormikProps } from "formik";
// import * as yup from "yup";

// const PatientForm = ({ onSubmit, disabled }) => {
//   const [patientData, setPatientData] = useState({
//     patientName: "",
//     date: "",
//     day: "",
//     otTable: "",
//     diagnosis: "",
//     procedure: "",
//     consultantName: "",
//   });

//   const handleChange = (key, value) => {
//     setPatientData((prevData) => ({
//       ...prevData,
//       [key]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     onSubmit(patientData); // Pass the patientData to the onSubmit function
//     setPatientData({
//       // Reset the form after submission
//       patientName: "",
//       date: "",
//       day: "",
//       otTable: "",
//       diagnosis: "",
//       procedure: "",
//       consultantName: "",
//     });
//   };

//   const validationSchema = yup.object({
//     date: yup.string().required(),
//     day: yup.string().required(),
//     otTable: yup.string().required(),
//     patientName: yup.string().required(),
//     diagnosis: yup.string().required(),
//     procedure: yup.string().required(),
//     consultantName: yup.string().required(),
//   });

//   const getSystemDate = () => {
//     const today = new Date();
//     const date =
//       today.getFullYear() +
//       "-" +
//       (today.getMonth() + 1) +
//       "-" +
//       today.getDate();
//     const day = today.getDay();
//     return { date, day };
//   };

//   useEffect(() => {
//     const systemDate = getSystemDate();
//     setDate(systemDate.date);
//     setDay(systemDate.day);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Formik
//         initialValues={{}}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ errors, touched, state }) => (
//           <View>
//             <Text style={styles.label}>Date:</Text>
//             <TextInput
//               style={styles.input}
//               value={date}
//               placeholder="Enter date"
//               disabled={disabled}
//             />
//             {errors.date && touched.date && (
//               <Text style={styles.error}>{errors.date}</Text>
//             )}

//             <Text style={styles.label}>Day:</Text>
//             <TextInput
//               style={styles.input}
//               value={day}
//               placeholder="Enter day"
//               disabled={disabled}
//             />
//             {errors.day && touched.day && (
//               <Text style={styles.error}>{errors.day}</Text>
//             )}

//             <Text style={styles.label}>OT Table:</Text>
//             <TextInput
//               style={styles.input}
//               value={otTable}
//               onChangeText={setOTTable}
//               placeholder="Enter OT table"
//               disabled={disabled}
//             />
//             {errors.otTable && touched.otTable && (
//               <Text style={styles.error}>{errors.otTable}</Text>
//             )}

//             <Text style={styles.label}>Patient Name:</Text>
//             <TextInput
//               style={styles.input}
//               value={patientName}
//               onChangeText={setPatientName}
//               placeholder="Enter patient name"
//               disabled={disabled}
//             />
//             {errors.patientName && touched.patientName && (
//               <Text style={styles.error}>{errors.patientName}</Text>
//             )}

//             <Text style={styles.label}>Diagnosis:</Text>
//             <TextInput
//               style={styles.input}
//               value={diagnosis}
//               onChangeText={setDiagnosis}
//               placeholder="Enter diagnosis"
//               disabled={disabled}
//             />
//             {errors.diagnosis && touched.diagnosis && (
//               <Text style={styles.error}>{errors.diagnosis}</Text>
//             )}

//             <Text style={styles.label}>Procedure:</Text>
//             <TextInput
//               style={styles.input}
//               value={procedure}
//               onChangeText={setProcedure}
//               placeholder="Enter procedure"
//               disabled={disabled}
//             />
//             {errors.procedure && touched.procedure && (
//               <Text style={styles.error}>{errors.procedure}</Text>
//             )}

//             <Text style={styles.label}>Consultant Name:</Text>
//             <TextInput
//               style={styles.input}
//               value={consultantName}
//               onChangeText={setConsultantName}
//               placeholder="Enter consultant name"
//               disabled={disabled}
//             />
//             {errors.consultantName && touched.consultantName && (
//               <Text style={styles.error}>{errors.consultantName}</Text>
//             )}

//             <TouchableOpacity
//               style={[styles.button, { opacity: disabled ? 0.5 : 1 }]}
//               onPress={handleFormSubmit}
//               disabled={disabled}
//             >
//               <Text style={styles.buttonText}>Add Patient</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </Formik>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 20,
//   },
//   label: {
//     fontFamily: "Urbanist_600SemiBold",
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: colors.primaryColor,
//     borderRadius: 5,
//     padding: 10,
//     fontFamily: "Urbanist_400Regular",
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: colors.primaryColor,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   buttonText: {
//     fontFamily: "Urbanist_600SemiBold",
//     color: "#FFFFFF",
//     fontSize: 16,
//   },
//   error: {
//     color: "red",
//   },
// });

// export default PatientForm;
import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const PatientForm = () => {
  const nav = useNavigation();
  return (
    <View>
      <Button title="Back" onPress={nav.goBack()}></Button>
      <Text>PatientForm</Text>
    </View>
  );
};

export default PatientForm;

const styles = StyleSheet.create({});
