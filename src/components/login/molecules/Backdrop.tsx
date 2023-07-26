import { AuthModalProps } from './AuthModal';
import { M } from './style';

const Backdrop = ({ onClose }: AuthModalProps) => {
  return <M.BackdropContainer onClick={onClose} />;
};

export default Backdrop;
