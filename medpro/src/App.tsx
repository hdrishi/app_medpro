import Master from "./features/dashboard/components/Master";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewChat from "./features/dashboard/pages/NewChat";
import ChatWindow from "./features/chats/components/ChatWindow";
import ChatHistory from "./features/chats/components/ChatHistory";
import CreatePrompt from "./features/prompts/components/CreatePrompt";
import PromptLibrary from "./features/prompts/components/PromptLibrary";
import { ChatProvider } from "./features/chats/components/ChatContext";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Master />,
    children: [
      {
        index: true,
        element: 
        <ChatProvider>
          <NewChat />
        </ChatProvider>,
      },
      {
        path: "chat-window",
        element: 
        <ChatProvider>
          <ChatWindow />
        </ChatProvider>,
      },
      {
        path: "chat-history",
        element: <ChatHistory />,
      },
      {
        path: "prompt-library",
        element: <PromptLibrary />,
      },
      {
        path: "prompt-create",
        element: <CreatePrompt />,
      },
    ],
  },
]);


const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
