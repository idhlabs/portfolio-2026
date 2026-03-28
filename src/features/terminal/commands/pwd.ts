import type {
  Command,
  CommandOutput,
  TerminalState,
} from "../../../types/terminal";

export const pwdCommand: Command = {
  name: "pwd",
  description: "Muestra la ruta del directorio actual",
  usage: "pwd",
  execute: (_args: string[], state: TerminalState): CommandOutput => {
    const path = "/home/" + state.currentPath.join("/");
    return {
      type: "success",
      content: path,
    };
  },
};
