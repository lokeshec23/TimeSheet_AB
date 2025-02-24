"use client";
// context/ThemeContext.tsx
import { createContext, useState, ReactNode, useContext } from "react";

// Define the context type
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  projectEdit: any | null;
  setProjectEdit: (project: any | null) => void;
}

// Create Context with default values
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider Component Props
interface ThemeProviderProps {
  children: ReactNode;
}

// Provider Component
export const ContextProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>("light");
  const [projectEdit, setProjectEdit] = useState(null);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, projectEdit, setProjectEdit }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook for easy access
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
