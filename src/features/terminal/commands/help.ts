import type {
  Command,
  CommandOutput,
  TerminalState,
} from "../../../types/terminal";
import { commands } from "./index";

export const helpCommand: Command = {
  name: "help",
  description: "Muestra la lista de comandos disponibles",
  usage: "help",
  execute: (_args: string[], _state: TerminalState): CommandOutput => {
    const commandList = Object.values(commands)
      .map((cmd) => `  ${cmd.name.padEnd(10)} - ${cmd.description}`)
      .join("\n");

    return {
      type: "info",
      content: `Comandos disponibles:\n${commandList}\n\nEscribe 'help <comando>' para más información.`,
    };
  },
};
