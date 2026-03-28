import { useRef, useEffect, useState } from "react";
import { useTerminal } from "../../features/terminal/hooks/useTerminal";
import type { CommandOutput } from "../../types/terminal";
import TypewriterText from "./TypewriterText";
import { generateSplashInfoOnly } from "../../utils/asciiArt";
import "./Terminal.css";

/**
 * Componente Terminal Interactiva
 *
 * Simula una terminal de Linux/Unix donde los usuarios pueden
 * explorar el contenido del portfolio mediante comandos.
 *
 * Características:
 * - Comandos: ls, cd, cat, pwd, clear, help, whoami
 * - Historial de comandos (↑↓)
 * - Auto-scroll
 * - Prompt personalizado
 */
const Terminal = () => {
  const {
    terminalState,
    input,
    setInput,
    executeCommand,
    navigateHistory,
    endOfTerminalRef,
    getPrompt,
  } = useTerminal();

  const inputRef = useRef<HTMLInputElement>(null);
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 768px)").matches
      : false,
  );

  /**
   * Maneja el envío de comandos (Enter)
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  /**
   * Maneja las teclas especiales (↑, ↓, Tab)
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Flecha arriba: comando anterior
    if (e.key === "ArrowUp") {
      e.preventDefault();
      navigateHistory("up");
    }

    // Flecha abajo: comando siguiente
    if (e.key === "ArrowDown") {
      e.preventDefault();
      navigateHistory("down");
    }

    // Tab: autocompletado (por ahora deshabilitado)
    if (e.key === "Tab") {
      e.preventDefault();
      // TODO: Implementar autocompletado
    }
  };

  /**
   * Auto-focus en el input cuando se hace click en la terminal
   */
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  /**
   * Focus automático al montar el componente (después de la animación)
   */
  useEffect(() => {
    if (typewriterComplete) {
      inputRef.current?.focus();
      setShowInput(true);
    }
  }, [typewriterComplete]);

  useEffect(() => {
    if (isMobile) {
      setTypewriterComplete(true);
    }
  }, [isMobile]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    setIsMobile(media.matches);
    media.addEventListener("change", handleMediaChange);

    return () => {
      media.removeEventListener("change", handleMediaChange);
    };
  }, []);

  /**
   * Callback cuando termina la animación typewriter
   */
  const handleTypewriterComplete = () => {
    setTypewriterComplete(true);
  };

  /**
   * Determina la clase CSS según el tipo de output
   */
  const getOutputClass = (type: "success" | "error" | "info"): string => {
    switch (type) {
      case "success":
        return "terminal-output-success";
      case "error":
        return "terminal-output-error";
      case "info":
        return "terminal-output-info";
      default:
        return "";
    }
  };

  return (
    <div className="terminal-container" onClick={handleTerminalClick}>
      <div className="terminal-body">
        {/* Historial de output */}
        <div className="terminal-output">
          {terminalState.output.map((line: CommandOutput, index: number) => {
            const isSplashLine = index === 0;
            const currentLine =
              isMobile && isSplashLine
                ? generateSplashInfoOnly()
                : line.content;

            return (
              <div
                key={index}
                className={`terminal-line ${getOutputClass(line.type)}`}
              >
                <pre className="terminal-text">
                  {/* Usar efecto typewriter solo para el primer output (splash screen) en desktop */}
                  {isSplashLine && !typewriterComplete && !isMobile ? (
                    <TypewriterText
                      text={currentLine}
                      speed={0.5}
                      onComplete={handleTypewriterComplete}
                    />
                  ) : (
                    currentLine
                  )}
                </pre>
              </div>
            );
          })}
        </div>

        {/* Input actual - solo se muestra después de la animación inicial */}
        {showInput && (
          <form onSubmit={handleSubmit} className="terminal-input-container">
            <span className="terminal-prompt">
              {getPrompt(terminalState.currentPath)}
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
            />
          </form>
        )}

        {/* Elemento para auto-scroll */}
        <div ref={endOfTerminalRef} />
      </div>
    </div>
  );
};

export default Terminal;
