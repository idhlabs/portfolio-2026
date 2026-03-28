// src/features/terminal/utils/parser.ts

import type { CommandOutput, TerminalState } from "../../../types/terminal";
import { commands } from "../commands/index";

/**
 * Parsea y ejecuta un comando de la terminal
 * @param input - Cadena de texto con el comando completo
 * @param state - Estado actual de la terminal
 * @returns Salida del comando ejecutado
 */
export const parseCommand = (
  input: string,
  state: TerminalState,
): CommandOutput => {
  // Limpiar y dividir el input
  const trimmedInput = input.trim();

  if (!trimmedInput) {
    return {
      type: "info",
      content: "",
    };
  }

  // Separar comando y argumentos
  const parts = trimmedInput.split(/\s+/);
  const commandName = parts[0].toLowerCase();
  const args = parts.slice(1);

  // Buscar el comando
  const command = commands[commandName];

  if (!command) {
    return {
      type: "error",
      content: `Comando no encontrado: ${commandName}. Escribe 'help' para ver los comandos disponibles.`,
    };
  }

  // Ejecutar el comando
  try {
    return command.execute(args, state);
  } catch (error) {
    return {
      type: "error",
      content: `Error al ejecutar ${commandName}: ${error instanceof Error ? error.message : "Error desconocido"}`,
    };
  }
};
