import { useState, useCallback, useRef, useEffect } from "react";
import type { TerminalState, CommandOutput } from "../../../types/terminal";
import { parseCommand } from "../utils/parser";
import { generateSplashScreen } from "../../../utils/asciiArt";

/**
 * Custom hook que maneja toda la lógica de la terminal
 *
 * Características:
 * - Estado de la terminal (ruta actual, historial)
 * - Ejecución de comandos
 * - Historial de comandos con navegación ↑↓
 * - Auto-scroll al final
 */
export const useTerminal = () => {
  // Estado principal de la terminal
  const [terminalState, setTerminalState] = useState<TerminalState>({
    currentPath: ["ivan"], // El fileSystem ya es /home
    history: [],
    output: [
      {
        type: "info",
        content: generateSplashScreen(),
      },
    ],
  });

  // Input actual del usuario
  const [input, setInput] = useState("");

  // Índice para navegar por el historial con flechas
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Referencia al final de la terminal para auto-scroll
  const endOfTerminalRef = useRef<HTMLDivElement>(null);

  /**
   * Auto-scroll al final cuando hay nuevo output
   */
  useEffect(() => {
    endOfTerminalRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalState.output]);

  /**
   * Ejecuta un comando
   */
  const executeCommand = useCallback(
    (commandInput: string) => {
      if (!commandInput.trim()) return;

      // Agregar el comando al historial
      const newHistory = [...terminalState.history, commandInput];

      // Crear una copia del estado para pasar al parser
      const stateForExecution: TerminalState = {
        ...terminalState,
        history: newHistory,
      };

      // Ejecutar el comando
      const result: CommandOutput = parseCommand(
        commandInput,
        stateForExecution,
      );

      // Manejar el comando especial "clear"
      if (result.content === "__CLEAR__") {
        setTerminalState({
          currentPath: stateForExecution.currentPath,
          history: newHistory,
          output: [],
        });
        setInput("");
        setHistoryIndex(-1);
        return;
      }

      // Agregar el comando ejecutado y su resultado al output
      const newOutput: CommandOutput[] = [
        ...terminalState.output,
        {
          type: "info",
          content: `${getPrompt(terminalState.currentPath)}${commandInput}`,
        },
      ];

      // Solo agregar resultado si tiene contenido
      if (result.content) {
        newOutput.push(result);
      }

      // Actualizar estado
      setTerminalState({
        currentPath: stateForExecution.currentPath, // Puede haber cambiado con 'cd'
        history: newHistory,
        output: newOutput,
      });

      // Limpiar input y resetear índice de historial
      setInput("");
      setHistoryIndex(-1);
    },
    [terminalState],
  );

  /**
   * Navega por el historial de comandos con flechas ↑↓
   */
  const navigateHistory = useCallback(
    (direction: "up" | "down") => {
      const { history } = terminalState;

      if (history.length === 0) return;

      let newIndex = historyIndex;

      if (direction === "up") {
        // Flecha arriba: comando más antiguo
        newIndex =
          historyIndex === -1
            ? history.length - 1
            : Math.max(0, historyIndex - 1);
      } else {
        // Flecha abajo: comando más reciente
        newIndex =
          historyIndex === -1
            ? -1
            : Math.min(history.length - 1, historyIndex + 1);

        // Si llegamos al final, limpiar input
        if (
          newIndex === history.length - 1 &&
          historyIndex === history.length - 1
        ) {
          newIndex = -1;
        }
      }

      setHistoryIndex(newIndex);
      setInput(newIndex === -1 ? "" : history[newIndex]);
    },
    [terminalState.history, historyIndex],
  );

  /**
   * Genera el prompt de la terminal
   */
  const getPrompt = (path: string[]): string => {
    if (path.length === 1 && path[0] === "ivan") {
      return "ivan@portfolio:~$ ";
    }
    const subPath = path.slice(1).join("/");
    return `ivan@portfolio:~/${subPath}$ `;
  };

  return {
    terminalState,
    input,
    setInput,
    executeCommand,
    navigateHistory,
    endOfTerminalRef,
    getPrompt,
  };
};
