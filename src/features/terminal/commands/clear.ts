import type {
  Command,
  CommandOutput,
  TerminalState,
} from "../../../types/terminal";

export const clearCommand: Command = {
  name: "clear",
  description: "Limpia la pantalla de la terminal",
  usage: "clear",
  execute: (_args: string[], _state: TerminalState): CommandOutput => {
    return {
      type: "info",
      content: "__CLEAR__",
    };
  },
};
