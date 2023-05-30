export default (state, action) => {
  switch (action.type) {
    case "SET_PATIENTS":
      return {
        ...state,
        patients: action.payload,
        patientCount: action.count,
      };
    case "INCREMENT_PATIENT_COUNT":
      return {
        ...state,
        patientCount: state.patientCount + 1,
      };
    case "INCREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};
