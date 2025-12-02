import React, { createContext, useState } from "react";

export type NotebookTxtType = {
  notebookTxt: string;
  setNotebookTxt: React.Dispatch<React.SetStateAction<string>>;
};

export const NotebookContext = createContext<NotebookTxtType | null>(null);

export const NotebookProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notebookTxt, setNotebookTxt] = useState<string>("");
  return (
    <NotebookContext.Provider value={{ notebookTxt, setNotebookTxt }}>
      {children}
    </NotebookContext.Provider>
  );
};
