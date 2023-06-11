// firebaseFunctions.ts
import { db } from "./firebase";
import { getDocs, collection } from "firebase/firestore";

export interface Category {
  id: string;
  name: string;
  info: string;
  desc: string;
}

export const categoryCollectionRef = collection(db, "categories");

export const getCategories = async (): Promise<Category[]> => {
  try {
    const data = await getDocs(categoryCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      info: doc.data().info,
      desc: doc.data().desc,
    }));
    return filteredData.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error(error);
    return [];
  }
};
