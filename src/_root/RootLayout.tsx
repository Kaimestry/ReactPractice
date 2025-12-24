import { Outlet } from "react-router-dom";
import Nav from "../components/NavBar/Nav";
import Header from "../components/Header/Header";
import ChatBot from "../features/ChatBot/ChatBot";

const RootLayout = () => {
  return (
    <div className="flex h-screen bg-main text-primary">
      <Nav />

      {/* MAIN FOCUS PAGE */}
      <div className="flex flex-col ">
        <Header />
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          <div className="flex justify-center px-4">
            <Outlet />
          </div>
        </div>
      </div>

      {/* AI CHATBOT */}
      <ChatBot />
    </div>
  );
};

export default RootLayout;
