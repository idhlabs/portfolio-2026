import type {
  Command,
  CommandOutput,
  TerminalState,
} from "../../../types/terminal";
import { fileSystem } from "../../../data/filesystem";
import { navigateToPath, readFile } from "../../../utils/terminalUtils";

export const catCommand: Command = {
  name: "cat",
  description: "Muestra el contenido de un archivo",
  usage: "cat <archivo>",
  execute: (args: string[], state: TerminalState): CommandOutput => {
    if (args.length === 0) {
      return {
        type: "error",
        content: "cat: falta el nombre del archivo",
      };
    }

    const fileName = args[0];
    const filePath = [...state.currentPath, fileName];
    const fileNode = navigateToPath(fileSystem, filePath);

    if (!fileNode) {
      return {
        type: "error",
        content: `cat: ${fileName}: No existe el archivo`,
      };
    }

    if (fileNode.type !== "file") {
      return {
        type: "error",
        content: `cat: ${fileName}: Es un directorio`,
      };
    }

    return {
      type: "success",
      content: readFile(fileNode),
    };
  },
};
