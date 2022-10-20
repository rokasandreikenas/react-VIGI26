import { createContext, useState, useEffect } from "react";

export const NightModeContext = createContext();

const NightModeProvider = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const nightMode = localStorage.getItem("mode");

    if (nightMode !== null) {
      setIsNightMode(nightMode === "false");
    }
  }, []);

  const toggleMode = () => {
    setIsNightMode((prevMode) => !prevMode);
    localStorage.setItem("mode", isNightMode);
  };

  return (
    <NightModeContext.Provider value={{ isNightMode, toggleMode }}>
      {children}
    </NightModeContext.Provider>
  );
};

export default NightModeProvider;
