import firebase_app from "../config";
import {
  collection,
  query,
  orderBy,
  getDocs,
  getFirestore,
} from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function getItems() {
  const itemsRef = collection(db, "items");
  const q = query(
    itemsRef,
    orderBy("status", "asc"),
    orderBy("timestamp", "desc")
  );

  const querySnapshot = await getDocs(q);

  const items: any[] = [];

  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}
