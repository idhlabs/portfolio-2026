import type {
  Command,
  CommandOutput,
  TerminalState,
} from "../../../types/terminal";
import { fileSystem } from "../../../data/filesystem";
import { navigateToPath, listDirectory } from "../../../utils/terminalUtils";

export const lsCommand: Command = {
  name: "ls",
  description: "Lista los archivos y directorios",
  usage: "ls",
  execute: (_args: string[], state: TerminalState): CommandOutput => {
    const currentDir = navigateToPath(fileSystem, state.currentPath);

    if (!currentDir || currentDir.type !== "directory") {
      return {
        type: "error",
        content: "Error: No se pudo acceder al directorio",
      };
    }

    const items = listDirectory(currentDir);

    if (items.length === 0) {
      return {
        type: "info",
        content: "Directorio vacío",
      };
    }

    const formattedItems = items.map((item) => {
      const node = navigateToPath(currentDir, [item]);
      if (node?.type === "directory") {
        return `${item}/`;
      }
      return `${item}`;
    });

    return {
      type: "success",
      content: formattedItems.join("\n"),
    };
  },
};
