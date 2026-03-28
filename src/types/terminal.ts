export interface CommandOutput {
  type: "success" | "error" | "info";
  content: string;
}

export interface TerminalState {
  currentPath: string[]; // ['home', 'ivan', 'proyectos']
  history: string[]; // Historial de comandos ejecutados
  output: CommandOutput[]; // Salida de la terminal
}

export type CommandFunction = (
  args: string[],
  state: TerminalState,
) => CommandOutput;

export interface Command {
  name: string;
  description: string;
  usage: string;
  execute: CommandFunction;
}
