"use client";
import React, { useEffect, useRef } from "react";
import "./globals.css";
import { db } from "./firebase";
import { getDocs, collection } from "firebase/firestore";
interface Category {
  id: string;
  name: string;
  info: string;
  desc: string;
}

export default function Home() {
  const [category, setCategory] = React.useState<Category[]>([]);
  const [input, setInput] = React.useState<string>("");
  const [output, setOutput] = React.useState<string>("");
  const [prefix, setPrefix] = React.useState<string>("visitor");
  const [history, setHistory] = React.useState<Array<string>>([]);
  const [historyIndex, setHistoryIndex] = React.useState<number>(-1);

  const afterfix = "@ahlaulhee.github.io:~$";
  const categoryCollectionRef = collection(db, "categories");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await getDocs(categoryCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          // ...doc.data(),
          id: doc.id,
          name: doc.data().name,
          info: doc.data().info,
          desc: doc.data().desc,
        }));
        setCategory(filteredData.sort((a, b) => a.name.localeCompare(b.name)));
        const welcome = filteredData.find((c) => c.name === "welcome");
        if (welcome) {
          setOutput(`${welcome.info.split("\\n").join("\n")} \n`);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.getElementById("consoleInput")?.focus();
    window.scrollTo(0, document.body.scrollHeight);
  }, [output]);

  const handleOutput = (info: string) => {
    setOutput(
      (prev) => `${(prev += `$ ${input} \n${info.split("\\n").join("\n")} \n`)}`
    );
    setInput("");
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  type CommandHandlers = Record<string, () => void>;

  const commandHandlers: CommandHandlers = {
    setprefix: () => {
      const auxArray = input.split(" ");
      setPrefix(auxArray[1]);
      setOutput((prev) => `${prev}$ ${input}\n`);
      setInput("");
    },
    help: () => {
      handleOutput(
        category
          .map((e) => `${e.name} ${" ".repeat(25 - e.name.length)} ${e.desc}`)
          .join("\n")
      );
    },
    welcome: () => {
      const welcome: Category | undefined = category.find(
        (c) => c.name === "welcome"
      );
      if (welcome) {
        handleOutput(welcome.info);
      }
    },
    about: () => {
      const about = category.find((c) => c.name === "about");
      if (about) {
        handleOutput(about.info);
      }
    },
    projects: () => {
      const projects = category.find((c) => c.name === "projects");
      if (projects) {
        handleOutput(projects.info);
      }
    },
    futureprojects: () => {
      const futureprojects = category.find((c) => c.name === "futureprojects");
      if (futureprojects) {
        handleOutput(futureprojects.info);
      }
    },
    contact: () => {
      const contact = category.find((c) => c.name === "contact");
      if (contact) {
        handleOutput(contact.info);
      }
    },
    hobbies: () => {
      const hobbies = category.find((c) => c.name === "hobbies");
      if (hobbies) {
        handleOutput(hobbies.info);
      }
    },
    education: () => {
      const education = category.find((c) => c.name === "education");
      if (education) {
        handleOutput(education.info);
      }
    },
    jobs: () => {
      const jobs = category.find((c) => c.name === "jobs");
      if (jobs) {
        handleOutput(jobs.info);
      }
    },
    skills: () => {
      const skills = category.find((c) => c.name === "skills");
      if (skills) {
        handleOutput(skills.info);
      }
    },

    history: () => handleOutput(history.join("\n")),
    whoami: () => handleOutput(prefix),
    pwd: () => handleOutput(`${prefix}/home`),
    clear: () => {
      setOutput("");
      setInput("");
    },
  };

  const validateInput = (input: string) => {
    let regex = /^setprefix\s\S+$/;
    if (regex.test(input)) {
      commandHandlers.setprefix();
    } else {
      const commandHandler = commandHandlers[input];
      if (commandHandler) {
        commandHandler();
      } else {
        handleOutput(`command not found: ${input}`);
      }
    }
  };

  return (
    <main
      onClick={(e) => inputRef.current?.focus()}
      className="bg-darkBlue text-white w-auto h-screen flex-col items-start font-primary p-5"
    >
      <pre className="bg-darkBlue text-mediumBlue">{output}</pre>
      <div className="flex py-1">
        <span className="bg-darkBlue pr-2">
          <span className="text-red">{prefix}</span>
          <span className="text-green">{afterfix}</span>
        </span>
        <input
          ref={inputRef}
          type="text"
          id="consoleInput"
          value={input}
          onChange={handleInput}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              history.push(input);
              validateInput(input);
              setHistoryIndex(history.length);
            } else if (e.key === "ArrowUp") {
              if (historyIndex > 0) {
                setHistoryIndex(historyIndex - 1);
                setInput(history[historyIndex - 1]);
              }
            } else if (e.key === "ArrowDown") {
              if (historyIndex < history.length - 1) {
                setHistoryIndex(historyIndex + 1);
                setInput(history[historyIndex + 1]);
              } else {
                setHistoryIndex(history.length);
                setInput("");
              }
            }
            if (e.ctrlKey && e.key === "l") {
              setOutput("");
            }
          }}
          className="bg-darkBlue border-0 p-0 w-full focus:outline-none placeholder-gray-500"
        />
      </div>
    </main>
  );
}
