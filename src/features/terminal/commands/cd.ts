import type {
  Command,
  CommandOutput,
  TerminalState,
} from "../../../types/terminal";
import { fileSystem } from "../../../data/filesystem";
import { navigateToPath } from "../../../utils/terminalUtils";

export const cdCommand: Command = {
  name: "cd",
  description: "Cambia el directorio actual",
  usage: "cd <directorio>",
  execute: (args: string[], state: TerminalState): CommandOutput => {
    if (args.length === 0) {
      state.currentPath = ["ivan"]; // Volver a /home/ivan
      return {
        type: "success",
        content: "",
      };
    }

    const targetPath = args[0];

    if (targetPath === "..") {
      if (state.currentPath.length > 1) {
        state.currentPath.pop();
      }
      return {
        type: "success",
        content: "",
      };
    }

    const newPath = [...state.currentPath, targetPath];
    const targetNode = navigateToPath(fileSystem, newPath);

    if (!targetNode) {
      return {
        type: "error",
        content: `cd: ${targetPath}: No existe el directorio`,
      };
    }

    if (targetNode.type !== "directory") {
      return {
        type: "error",
        content: `cd: ${targetPath}: No es un directorio`,
      };
    }

    state.currentPath = newPath;
    return {
      type: "success",
      content: "",
    };
  },
};
