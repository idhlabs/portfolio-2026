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
        className={`window-modal-shell ${width} ${height} animate-windowOpen flex flex-col`}
      >
        <div className="window-modal-titlebar">
          <span className="window-modal-title-icon" aria-hidden="true" />
          <span className="window-modal-title">{title}</span>
          <button className="window-modal-close" onClick={() => onClose(id)}>
            ×
          </button>
        </div>
        <div
          className={
            noPadding
              ? "window-modal-content flex-1 min-h-0"
              : "window-modal-content p-4 flex-1 min-h-0"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default WindowModal;
