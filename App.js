import { StyleSheet, Button, View } from "react-native";
import { FIRESTORE_DB } from "./firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
const App = () => {
  const add = () => {
    console.log("ADDED");
    const doc = addDoc(collection(FIRESTORE_DB, "counter"), {
      patient: "Saddam",
      id: "1",
      done: false,
    });
    console.log("ADDED: ", doc);
  };

  return (
    <View style={styles.container}>
      <Button title="Add" onPress={() => add()} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
