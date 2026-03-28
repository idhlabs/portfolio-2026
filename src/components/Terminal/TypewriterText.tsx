import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number; // Milisegundos por carácter
  onComplete?: () => void;
}

/**
 * Componente que muestra texto con efecto de máquina de escribir
 */
const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 3,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [currentIndex, text, speed, onComplete, isComplete]);

  return (
    <>
      {displayedText}
      {!isComplete && <span className="typewriter-cursor">▋</span>}
    </>
  );
};

export default TypewriterText;
