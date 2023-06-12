// commandHandlers.ts
import { Category } from "./firebaseFunctions";

export type CommandHandlers = Record<
  string,
  (
    category: Category[],
    input: string,
    handleOutput: (info: string) => void
  ) => void
>;

export const commandHandlers: CommandHandlers = {
  setprefix: (category, input, handleOutput) => {
    const auxArray = input.split(" ");
    handleOutput(auxArray[1]);
  },
  help: (category, input, handleOutput) => {
    handleOutput(
      category
        .map((e) => `${e.name} ${" ".repeat(25 - e.name.length)} ${e.desc}`)
        .join("\n"),
      "#bb9af7"
    );
  },
  welcome: (category, input, handleOutput) => {
    const welcome: Category | undefined = category.find(
      (c) => c.name === "welcome"
    );
    if (welcome) {
      handleOutput(welcome.info);
    }
  },
  about: (category, input, handleOutput) => {
    const about = category.find((c) => c.name === "about");
    if (about) {
      handleOutput(about.info, "#9ece6a");
    }
  },
  projects: (category, input, handleOutput) => {
    const projects = category.find((c) => c.name === "projects");
    if (projects) {
      handleOutput(projects.info, "#f7768e");
    }
  },
  futureprojects: (category, input, handleOutput) => {
    const futureprojects = category.find((c) => c.name === "futureprojects");
    if (futureprojects) {
      handleOutput(futureprojects.info, "#f7768e");
    }
  },
  contact: (category, input, handleOutput) => {
    const contact = category.find((c) => c.name === "contact");
    if (contact) {
      handleOutput(contact.info, "#7aa2f7");
    }
  },
  hobbies: (category, input, handleOutput) => {
    const hobbies = category.find((c) => c.name === "hobbies");
    if (hobbies) {
      handleOutput(hobbies.info, "#ff9e64");
    }
  },
  education: (category, input, handleOutput) => {
    const education = category.find((c) => c.name === "education");
    if (education) {
      handleOutput(education.info, "#2ac3de");
    }
  },
  jobs: (category, input, handleOutput) => {
    const jobs = category.find((c) => c.name === "jobs");
    if (jobs) {
      handleOutput(jobs.info, "#2ac3de");
    }
  },
  skills: (category, input, handleOutput) => {
    const skills = category.find((c) => c.name === "skills");
    if (skills) {
      handleOutput(skills.info, "#2ac3de");
    }
  },
  //   history: (category, input, handleOutput, history) => {
  //     handleOutput(history.join("\n"));
  //   },
  //   whoami: (category, input, handleOutput, history, prefix) => {
  //     handleOutput(prefix);
  //   },
  //   pwd: (category, input, handleOutput, history, prefix) => {
  //     handleOutput(`${prefix}/home`);
  //   },
  //   clear: (category, input, handleOutput) => {
  //     handleOutput("");
  //   },
};
