import { useEffect, useReducer } from "react";
import PatientReducer from "./patientReducer";
import PatientContext from "./patientContext";
import { collection, query, getDocs, addDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebaseConfig";

export const PatientProvider = ({ children }) => {
  const initialState = {
    patients: [],
    patientCount: 0,
    counter: 0,
  };

  const [state, dispatch] = useReducer(PatientReducer, initialState);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const querySnapshot = await getDocs(
          query(collection(FIRESTORE_DB, "patients"))
        );
        const fetchedPatients = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        dispatch({
          type: "SET_PATIENTS",
          payload: fetchedPatients,
          count: fetchedPatients.length,
        });
      } catch (error) {
        console.log("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  const addPatient = async (patientData) => {
    if (state.patientCount >= 10) {
      return;
    }

    try {
      const patientCollectionRef = collection(FIRESTORE_DB, "patients");
      await addDoc(patientCollectionRef, patientData);
      dispatch({ type: "INCREMENT_PATIENT_COUNT" });
      dispatch({ type: "INCREMENT_COUNTER" });
    } catch (error) {
      console.log("Error adding patient:", error);
    }
  };

  return (
    <PatientContext.Provider value={{ ...state, addPatient }}>
      {children}
    </PatientContext.Provider>
  );
};
