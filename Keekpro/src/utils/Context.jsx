import { createContext, useState } from "react";

export const Mycontext = createContext(null);

export const ContextProvider = (props) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <Mycontext.Provider value={{ expanded, setExpanded }}>
      {props.children}
    </Mycontext.Provider>
  );
};
