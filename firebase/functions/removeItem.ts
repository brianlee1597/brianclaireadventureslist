import firebase_app from "../config";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import ListItem from "../models/listItem";

const db = getFirestore(firebase_app);

export default async function removeItem(item: ListItem) {
  await deleteDoc(doc(db, "items", item.id));
}
