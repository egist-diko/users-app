import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PopupModalProps {
  child: ReactNode;
}

const PopupModal: React.FC<PopupModalProps> = ({ child }) => {
  if (!child) return null;

  return createPortal(
    <div>{child}</div>,
    (document as any).getElementById('modal-root')
  );
};

export default PopupModal;
