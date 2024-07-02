"use client";
import { createContext, useContext, useEffect, useState } from "react";

// create the context
const ScreenResizeContext = createContext(null);

// Provide the context
export const ScreenResizeContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // Call handleResize once to set the initial screenSize
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenResizeContext.Provider value={{ screenSize }}>
      {children}
    </ScreenResizeContext.Provider>
  );
};

// Custom hook
export const useScreenResize = () => {
  const context = useContext(ScreenResizeContext);

  if (context === undefined) {
    throw new Error(
      "useScreenResize must be used within a ScreenResizeContextProvider"
    );
  }

  return context;
};
