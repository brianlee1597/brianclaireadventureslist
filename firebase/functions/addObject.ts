import firebase_app from "../config";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function addData(_collection: string, data: any) {
  let result = null,
    error = null;

  try {
    result = await addDoc(collection(db, _collection), data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
