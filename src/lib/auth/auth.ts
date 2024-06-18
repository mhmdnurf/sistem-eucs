import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const loginWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Login success", user);
  } catch (error) {
    console.log("Login error", error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log("Logout success");
  } catch (error) {
    console.error("Logout error", error);
  }
};
