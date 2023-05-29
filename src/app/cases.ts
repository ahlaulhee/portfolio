import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";

export interface Category {
  id: string;
  name: string;
  info: string;
  desc: string;
}

export const getCategories = async (
  setCategory: (categories: Category[]) => void
) => {
  try {
    const categoryCollectionRef = collection(db, "categories");
    const data = await getDocs(categoryCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      info: doc.data().info,
      desc: doc.data().desc,
    }));
    setCategory(filteredData.sort((a, b) => a.name.localeCompare(b.name)));
  } catch (error) {
    console.error(error);
  }
};

export const handleInput = (
  e: React.ChangeEvent<HTMLInputElement>,
  setInput: (value: string) => void
) => {
  setInput(e.target.value);
};

export const handleOutput = (
  info: string,
  input: string,
  setOutput: (value: string) => void,
  setInput: (value: string) => void
) => {
  setOutput(
    (prev: string) => `${prev}$ ${input} \n${info.split("\\n").join("\n")} \n`
  );
  setInput("");
};

export const commandHandlers = (
  input: string,
  category: Category[],
  handleOutput: (info: string) => void,
  setPrefix: (value: string) => void,
  setOutput: (value: string) => void,
  setInput: (value: string) => void
) => {
  const help = () => {
    handleOutput(
      category
        .map((e) => `${e.name} ${" ".repeat(25 - e.name.length)} ${e.desc}`)
        .join("\n")
    );
  };

  const setprefix = () => {
    const auxArray = input.split(" ");
    setPrefix(auxArray[1]);
    setOutput((prev: string): string => `${prev}$ ${input}\n`);
    setInput("");
  };

  // Add other command handlers here

  return {
    help,
    setprefix,
    // Add other command handlers here
  };
};
