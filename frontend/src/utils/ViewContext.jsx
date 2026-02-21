import { createContext, useState } from "react";

export const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
  const [viewType, setViewType] = useState("card");

  return (
    <ViewContext.Provider value={{ viewType, setViewType }}>
      {children}
    </ViewContext.Provider>
  );
};
