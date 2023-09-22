import React, { createContext, useState } from 'react';

type IsValidType = boolean | null;

type ValidContextType = {
  isValid: IsValidType;
  expiredRefreshToken: () => void;
  unexpiredRefreshToken: () => void;
};

type IssuesProviderProps = {
  children: React.ReactNode;
};

export const ValidContext = createContext<ValidContextType>({ isValid: null, expiredRefreshToken: () => {}, unexpiredRefreshToken: () => {} });

const ValidProvider: React.FC<IssuesProviderProps> = ({ children }) => {
  const [isValid, setIsValid] = useState<IsValidType>(null);

  const expiredRefreshToken = () => {
    setIsValid(false);
  };

  const unexpiredRefreshToken = () => {
    setIsValid(true);
  };

  return <ValidContext.Provider value={{ isValid, expiredRefreshToken, unexpiredRefreshToken }}>{children}</ValidContext.Provider>;
};

export default ValidProvider;
