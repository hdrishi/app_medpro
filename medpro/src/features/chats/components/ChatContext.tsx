import React, { createContext, useContext, useState, ReactNode } from "react";

export interface FileType {
  name: string;
  type: string;
  size: number;
  ext: string;
}

interface ChatContextType {
  selectedItem: string | null;
  setSelectedItem: (value: string | null) => void;
  files: FileType[];
  setFiles: React.Dispatch<React.SetStateAction<FileType[]>>; // ✅ must use Dispatch
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [files, setFiles] = useState<FileType[]>([]);
  const [userInput, setUserInput] = useState<string>("");

  return (
    <ChatContext.Provider value={{ selectedItem, setSelectedItem, files, setFiles, userInput, setUserInput }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChat must be used within ChatProvider");
  return context;
};
