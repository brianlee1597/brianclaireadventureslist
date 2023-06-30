import firebase_app from "../config";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function setComplete(item: any) {
  const result = await updateDoc(doc(db, "items", item.id), {
    status: "complete",
  });

  return result;
}
