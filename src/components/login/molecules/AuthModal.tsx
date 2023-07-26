import { createPortal } from 'react-dom';
import Backdrop from './Backdrop';
import Overlay from './Overlay';

export interface AuthModalProps {
  onClose: () => void;
}

const AuthModal = ({ onClose }: AuthModalProps) => {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, document.getElementById('backdrop-root')!)}
      {createPortal(<Overlay />, document.getElementById('overlay-root')!)}
    </>
  );
};

export default AuthModal;
