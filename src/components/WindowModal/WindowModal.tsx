import React from "react";
import "./WindowModal.css";

interface WindowModalProps {
  id: string;
  title: string;
  isOpen: boolean;
  onClose: (id: string) => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
  noPadding?: boolean;
}

const WindowModal: React.FC<WindowModalProps> = ({
  id,
  title,
  isOpen,
  onClose,
  children,
  width = "w-187.5",
  height = "min-h-100",
  noPadding = false,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id={id}
      className="fixed inset-0 z-1000 flex items-center justify-center bg-black/30"
    >
      <div
        className={`bg-white border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.3)] ${width} ${height} animate-windowOpen`}
      >
        <div className="bg-linear-to-b from-white to-gray-300 border-b-2 border-black px-2 py-1 flex justify-between items-center">
          <span className="font-bold text-sm">{title}</span>
          <button
            className="bg-white border-2 border-black w-5 h-5 text-base leading-none hover:bg-black hover:text-white cursor-pointer"
            onClick={() => onClose(id)}
          >
            ×
          </button>
        </div>
        <div className={noPadding ? "" : "p-4"}>{children}</div>
      </div>
    </div>
  );
};

export default WindowModal;
