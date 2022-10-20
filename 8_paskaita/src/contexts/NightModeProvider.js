import { createContext, useState } from "react";

export const NightModeContext = createContext();

const NightModeProvider = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleMode = () => {
    setIsNightMode((prevMode) => !prevMode);
    // false => !false (true)
    // true => !true (false)
  };

  return (
    <NightModeContext.Provider value={{ isNightMode, toggleMode }}>
      {children}
    </NightModeContext.Provider>
  );
};

export default NightModeProvider;
