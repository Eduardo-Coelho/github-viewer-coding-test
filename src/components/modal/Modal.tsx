import React, { useEffect } from 'react';
import { useKeyPress } from 'react-use';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: (bol: boolean) => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [escKeyPressed] = useKeyPress('Escape');

  useEffect(() => {
    if (escKeyPressed) {
      onClose(true);
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [escKeyPressed, onClose, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="model-container">
      <div className="model-content">
        {children}
        <button className="model-button" onClick={() => onClose(true)}>
          Close
        </button>
      </div>
    </div>
  );
};
