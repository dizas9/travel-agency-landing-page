"use client";

const { createContext, useState, useContext } = require("react");

const HoverContext = createContext();

// provider
export const HoverContextProvider = ({ children }) => {
  const [hoverItem, setHoverItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverItem(index);
  };

  const handleMouseLeave = () => {
    setHoverItem(null);
  };

  return (
    <HoverContext.Provider
      value={{ hoverItem, handleMouseEnter, handleMouseLeave }}
    >
      {children}
    </HoverContext.Provider>
  );
};

// custom hooks

export const useHover = () => {
  const context = useContext(HoverContext);

  return context;
};
