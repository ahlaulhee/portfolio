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
        .join("\n")
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
      handleOutput(about.info);
    }
  },
  projects: (category, input, handleOutput) => {
    const projects = category.find((c) => c.name === "projects");
    if (projects) {
      handleOutput(projects.info);
    }
  },
  futureprojects: (category, input, handleOutput) => {
    const futureprojects = category.find((c) => c.name === "futureprojects");
    if (futureprojects) {
      handleOutput(futureprojects.info);
    }
  },
  contact: (category, input, handleOutput) => {
    const contact = category.find((c) => c.name === "contact");
    if (contact) {
      handleOutput(contact.info);
    }
  },
  hobbies: (category, input, handleOutput) => {
    const hobbies = category.find((c) => c.name === "hobbies");
    if (hobbies) {
      handleOutput(hobbies.info);
    }
  },
  education: (category, input, handleOutput) => {
    const education = category.find((c) => c.name === "education");
    if (education) {
      handleOutput(education.info);
    }
  },
  jobs: (category, input, handleOutput) => {
    const jobs = category.find((c) => c.name === "jobs");
    if (jobs) {
      handleOutput(jobs.info);
    }
  },
  skills: (category, input, handleOutput) => {
    const skills = category.find((c) => c.name === "skills");
    if (skills) {
      handleOutput(skills.info);
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
