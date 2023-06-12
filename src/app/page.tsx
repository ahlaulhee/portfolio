"use client";
import React, { useEffect, useRef } from "react";
import "./globals.css";
import { Category, getCategories } from "./firebaseFunctions";
import { commandHandlers, CommandHandlers } from "./commandHandlers";

export default function Home() {
  const [category, setCategory] = React.useState<Category[]>([]);
  const [input, setInput] = React.useState<string>("");
  // const [output, setOutput] = React.useState<string>("");
  const [output, setOutput] = React.useState<
    Array<{ text: string; color?: string }>
  >([]);
  const [prefix, setPrefix] = React.useState<string>("visitor");
  const [history, setHistory] = React.useState<Array<string>>([]);
  const [historyIndex, setHistoryIndex] = React.useState<number>(-1);

  const afterfix = "@ahlaulhee.github.io:~$";
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategory(categories);
      const welcome = categories.find((c) => c.name === "welcome");
      if (welcome) {
        // setOutput(`${welcome.info.split("\\n").join("\n")} \n`);
        // setOutput(`${welcome.info.split("\\n").join("\n")} \n`);
        setOutput([{ text: `${welcome.info.split("\\n").join("\n")} \n` }]);
      }
    };
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.getElementById("consoleInput")?.focus();
    window.scrollTo(0, document.body.scrollHeight);
  }, [output]);

  const handleOutput = (info: string, color: string = "#9aa5ce") => {
    // setOutput(
    //   (prev) => `${(prev += `$ ${input} \n${info.split("\\n").join("\n")} \n`)}`
    // );
    // setInput("");
    setOutput((prev) => [
      ...prev,
      { text: `$ ${input} \n${info.split("\\n").join("\n")} \n`, color },
    ]);
    setInput("");
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const validateInput = (input: string) => {
    let regex = /^setprefix\s\S+$/;
    if (regex.test(input)) {
      commandHandlers.setprefix(category, input, (newPrefix) => {
        setPrefix(newPrefix);
        // setOutput((prev) => `${prev}$ ${input}\n`);
        handleOutput(`${input}`);
        setInput("");
      });
    } else {
      const commandHandler = commandHandlers[input];
      if (commandHandler) {
        commandHandler(category, input, handleOutput);
      } else if (
        input === "pwd" ||
        input === "clear" ||
        input === "history" ||
        input === "whoami" ||
        input === "date"
      ) {
        switch (input) {
          case "pwd":
            handleOutput(`${prefix}/home`);
            break;
          case "history":
            handleOutput(`${history.join("\\n")}`);
            break;
          case "whoami":
            handleOutput(prefix);
            break;
          case "date":
            const today = new Date();
            handleOutput(`${today.toLocaleDateString("en-US")}`);
            break;
          case "clear":
            setOutput([]);
            setInput("");
            break;
          default:
            break;
        }
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
      {/* <pre className="bg-darkBlue text-mediumBlue">{output}</pre> */}
      <pre className="bg-darkBlue text-mediumBlue">
        {output.map((item, index) => (
          <span key={index} style={{ color: item.color || "inherit" }}>
            {item.text}
          </span>
        ))}
      </pre>

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
              setOutput([]);
            }
          }}
          className="bg-darkBlue border-0 p-0 w-full focus:outline-none placeholder-gray-500"
        />
      </div>
    </main>
  );
}
