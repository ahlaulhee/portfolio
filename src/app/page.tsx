"use client";
import React, { useEffect, useRef } from "react";
import "./globals.css";

export default function Home() {
  const welcome = `
               Welcome to my Portfolio
             _     _             _ _          
        __ _| |__ | | __ _ _   _| | |__   ___ 
       / _\` | '_ \\| |/ _\` | | | | | '_ \\ / _ \\
      | (_| | | | | | (_| | |_| | | | | |  __/
       \\__,_|_| |_|_|\\__,_|\\__,_|_|_| |_|\\___|
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠔⠒⠉⠉⠉⠉⠉⠉⠁⠒⠦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠚⠁⠀⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢢⡀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠋⠀⠀⣀⡤⠠⡄⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠘⢦⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠁⠀⠀⣼⣬⣥⣴⣶⣶⣾⣷⣶⣦⣤⣄⡂⠀⣀⠐⠀⠀⠀⢣⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⣸⠥⠒⠊⠉⠁⠀⠀⠀⠀⠀⠀⠈⠉⠙⠛⠻⠿⣷⣦⡀⠀⠀⠀⠀⣇⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⣠⠖⡩⠀⠀⠀⠀⠀⣀⣤⣴⣶⠚⣷⣶⣶⣤⣄⡀⠀⠀⠀⠙⠻⣦⡄⠀⠀⢸⠀⠀⠀⠀
  ⠀⠀⢀⠴⠋⡤⠊⠀⠀⠀⣠⣴⣿⣿⠛⣿⡟⠀⠈⢿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠙⢦⡀⠸⠀⠀⠀⠀
  ⠀⡴⠁⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⠇⠀⣿⠃⠀⠀⠈⣿⣿⠏⢿⣿⣿⣿⣦⡠⣀⠄⠀⠙⢇⠀⠀⠀⠀
  ⡼⠀⠀⠀⢀⡄⠀⢀⣾⣿⣿⣿⡏⠀⠀⣿⠀⠀⢠⡀⢸⡿⠀⠈⢿⣿⣿⣿⣷⡌⠢⡀⠀⠀⠑⡄⠀⠀
  ⣇⠀⠀⠀⣈⠃⠀⢸⣿⣿⡟⣿⠀⠀⠀⠸⠀⠀⠈⠁⢨⠇⠀⣠⠼⣿⣿⣿⣿⣿⡄⠡⡄⠀⠀⠈⢆⠀
  ⠘⣆⠀⠱⡙⠄⢃⡿⣿⣿⡇⢻⢢⠽⠷⠿⡀⠀⠀⠀⠋⢉⠟⠉⠙⢿⢸⣿⣿⣿⣿⠀⡄⣀⠀⠀⠀⣇
  ⠀⠈⢦⡐⠞⠔⠊⢁⡿⣿⡇⠈⠋⢰⣶⠀⠙⢆⠀⠀⠀⠈⠀⢾⠆⠈⡹⢹⣿⣿⣿⡇⠁⠉⠀⠀⠀⢸
  ⠀⠀⠀⠙⠢⡐⠙⠋⠀⢻⡿⡄⠠⢄⣀⡠⠊⡸⠀⠀⠀⠐⠦⣄⠤⠞⠀⢼⣿⢏⣿⡟⠰⢿⠆⠀⠀⡸
  ⠀⠀⠀⠀⠀⠈⠉⠳⢄⡈⢿⢷⠀⠀⠀⠀⠀⠙⠂⠀⠀⠀⣀⠀⠀⠀⠀⣜⣹⣾⠟⢳⢀⠀⠀⢀⡸⠃
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⡄⠀⢈⠵⠒⢲⢞⡋⠉⠛⢦⡀⠈⢃⡼⠟⣛⣁⣀⡠⠵⠛⠈⠁⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠦⣀⠀⠀⠃⠀⠓⠀⠀⠀⣈⡴⠋⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠒⡖⠠⠔⠒⠒⢉⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠀⠀⠀⠀⠈⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⡉⠏⠀⠀⠀⠀⠀⢹⣿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⣾⣿⣿⣿⣿⡖⠢⢄⡠⠔⢲⣾⣿⣿⣿⣿⠲⣄⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠁⢸⣿⣿⣿⣿⣿⣆⠀⠀⣰⣿⣿⣿⣿⣿⣿⠀⠈⢣⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⠀⠀⢸⣿⣿⣿⣿⣿⣿⣆⣼⣿⣿⣿⣿⣿⣿⣿⠀⠓⠈⡇⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀
      Type 'help' to see the available commands
`;
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState(welcome);
  const [prefix, setPrefix] = React.useState("visitor");
  const [afterfix, setAfterfix] = React.useState("@ahlaulhee.github.io:~$");
  const [history, setHistory] = React.useState<Array<string>>([]);
  const categories = [
    { command: "about", desc: "Simple description about me." },
    { command: "projects", desc: "Projects i've worked on." },
    { command: "futureprojects", desc: "Projects i'm planning to do." },
    { command: "contact", desc: "Socials in which you can find me." },
    { command: "hobbies", desc: "My current hobbies apart from programming." },
    { command: "help", desc: "The whole list of commands and it's use." },
    {
      command: "history",
      desc: "All the commands you did in the current session.",
    },
    { command: "whoami", desc: "Who am I?." },
    { command: "pwd", desc: "Print working directory." },
    {
      command: "setprefix [value]",
      desc: "Change your prefix to something more creative.",
    },
    { command: "clear", desc: "Clear all the commands on screen." },
    { command: "", desc: "" },
    { command: "PRESS CTRL + L", desc: "CLEAR THE TERMINAL" },
    { command: "PRESS ARROW UP", desc: "SEE PREVIOUS COMMAND" },
  ];
  const about = `Hi there! I'm a Technical Programmer with a degree in Computer Science. I love working with a variety of programming languages, primarily TypeScript.`;
  const projects = `I'm currently working on this portfolio, but these are some of my latest projects:
PaSSafe : An App for IOS/ANDROID to generate and store passwords safely (Developed using MERN stack).
wttg2-helper : A website to help begginer players to complete the game Welcome to the Game 2.
Portfolio : What you see!.`;
  const futureProjects = `atm i dont have anything in mind.`;
  const contact = `My socials are the next:
~ Github : https://github.com/ahlaulhee
~ Linkedin : https://www.linkedin.com/in/alex-laulhe/
~ Instagram : https://www.instagram.com/alex.laulhe/
~ Gmail : ahlaulhe@gmail.com`;
  const hobbies = `Apart from coding, I enjoy gamming, some of my favorite games are Welcome to the Game 2, Minecraft, Counter Strike: Global Offensive and Dead by Daylight.`;

  const handleOutput = (info: string) => {
    setOutput((prev) => `${(prev += `$ ${input} \n${info} \n`)}`);
    setInput("");
  };

  const handleInput = (e: any) => {
    setInput(e.target.value);
  };
  const validateInput = (input: string) => {
    let output: string;
    let regex = /^setprefix\s\S+$/;
    if (regex.test(input)) {
      const auxArray = input.split(" ");
      setPrefix(auxArray[1]);
      setOutput((prev) => `${prev}$ ${input}\n`);
      setInput("");
    } else {
      switch (input) {
        case "help": {
          handleOutput(
            categories
              .map(
                (e) =>
                  `${e.command} ${" ".repeat(25 - e.command.length)} ${e.desc}`
              )
              .join("\n")
          );
          break;
        }
        case "welcome": {
          handleOutput(welcome);
          break;
        }
        case "about": {
          handleOutput(about);
          break;
        }
        case "projects": {
          handleOutput(projects);
          break;
        }
        case "futureprojects": {
          handleOutput(futureProjects);
          break;
        }
        case "contact": {
          handleOutput(contact);
          break;
        }
        case "hobbies": {
          handleOutput(hobbies);
          break;
        }
        case "history": {
          handleOutput(history.join("\n"));
          break;
        }
        case "whoami": {
          handleOutput(prefix);
          break;
        }
        case "pwd": {
          handleOutput(`${prefix}/home`);
          break;
        }
        case "clear": {
          setOutput("");
          setInput("");
          break;
        }
        default: {
          handleOutput(`command not found: ${input}`);
          break;
        }
      }
    }
  };

  useEffect(() => {
    document.getElementById("consoleInput")?.focus();
    window.scrollTo(0, document.body.scrollHeight);
  }, [output]);

  return (
    <main
      onClick={(e) => document.getElementById("consoleInput")?.focus()}
      className="bg-darkBlue text-white w-auto h-screen flex-col items-start font-primary p-5"
    >
      <pre className="bg-darkBlue text-mediumBlue">{output}</pre>
      <div className="flex py-1">
        <span className="bg-darkBlue pr-2">
          <span className="text-red">{prefix}</span>
          <span className="text-green">{afterfix}</span>
        </span>
        <input
          type="text"
          id="consoleInput"
          onChange={handleInput}
          onKeyDown={(key) => {
            if (key.key === "Enter") {
              history.push(input);
              validateInput(input);
            }
            if (key.key === "ArrowUp") {
              let aux = history.pop();
              aux ? setInput(aux?.toString()) : null;
            }
            if (key.ctrlKey && key.key === "l") {
              setOutput("");
            }
          }}
          value={input}
          className="bg-darkBlue border-0 p-0 w-full focus:outline-none placeholder-gray-500"
        />
      </div>
    </main>
  );
}
