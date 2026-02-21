import type {
  Command,
  CommandOutput,
  TerminalState,
} from "../../../types/terminal";

export const whoamiCommand: Command = {
  name: "whoami",
  description: "Muestra información sobre mí",
  usage: "whoami",
  execute: (_args: string[], _state: TerminalState): CommandOutput => {
    return {
      type: "success",
      content: `

👤 Iván Duarte Herrera
🚀 Full Stack Developer `,
    };
  },
};
