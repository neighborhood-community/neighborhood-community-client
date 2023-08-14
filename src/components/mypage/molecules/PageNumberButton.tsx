import { useRef } from 'react';
import { M } from './style';

interface PageNumberButtonProps {
  pageNumberData: number;
  handlePageNumber: (page: number) => void;
  isChecked: boolean;
}

const PageNumberButton = ({ pageNumberData, handlePageNumber, isChecked }: PageNumberButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOnClick = () => {
    handlePageNumber(pageNumberData);
  };

  return (
    <M.PageNumberButton ref={buttonRef} onClick={handleOnClick} id={`${pageNumberData}`} $isChecked={isChecked}>
      {pageNumberData}
    </M.PageNumberButton>
  );
};

export default PageNumberButton;
