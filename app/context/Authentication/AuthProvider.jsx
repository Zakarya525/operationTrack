import { useEffect, useReducer } from "react";

import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import { FIREBASE_AUTH } from "../../../firebaseConfig";
import {
  deleteAuthToken,
  saveAuthToken,
  getAuthToken,
} from "../../storage/SecureStore";

export const AuthProvider = ({ children }) => {
  const initialState = {
    user: {},
    isLoading: false,
    token: "",
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Get user token
  const signIn = (email, password) => {
    console.log(email, password);
    setLoading();
    signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
      .then((userCredential) => userCredential?.user)
      .then((user) => {
        if (user) {
          saveAuthToken(user?.accessToken);
          dispatch({
            type: "LOGIN_USER_AND_GET_TOKEN",
            token: user?.accessToken,
          });
        } else {
          dispatch({ type: "SET_LOADING_FALSE" });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  //Get user data
  //   useEffect(() => {
  //     setLoading();

  //     const handleAutoLogin = async () => {
  //       try {
  //         const token = await getAuthToken();
  //         if (token) {
  //           const userCredential = await signInWithCustomToken(
  //             FIREBASE_AUTH,
  //             token
  //           );
  //           const user = userCredential.user;
  //           if (user) {
  //             dispatch({
  //               type: "GET_USER",
  //               payload: user,
  //               token: token,
  //             });
  //           }
  //         }
  //       } catch (error) {
  //         console.log("Auto login failed:", error);
  //         setError(error);
  //         setLoading(false);
  //       }
  //     };

  //     handleAutoLogin();
  //   }, []);

  const logOut = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      await deleteAuthToken();
    } catch (error) {
      console.log("Logout failed:", error);
    }
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        // isLoading: state.isLoading,
        // user: state.user,
        // token: state.token,
        signIn,
        // logOut,
        name: "Zakarya",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
