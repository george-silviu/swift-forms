import { createContext, useState } from "react";

export const HeaderContext = createContext({
  isUserMenuOpen: false,
  setIsUserMenuOpen: () => {},
});

export const HeaderProvider = ({ children }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const value = { isUserMenuOpen, setIsUserMenuOpen };

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};
