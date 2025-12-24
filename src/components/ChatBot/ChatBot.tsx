import { TbMessageChatbotFilled } from "react-icons/tb";
import { RiAddBoxFill } from "react-icons/ri";
import { FaMicrophone } from "react-icons/fa";
import { RiSendPlane2Fill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

import { CHAT_MSG } from "./ChatBotMsg.config";
import { APP_CONFIG } from "../../config/app.config";

import ToggleChat from "./ToggleChat";
import { useState } from "react";

const ChatBot = () => {
  const [collapsed, setCollapsed] = useState(false); // 👈 OPEN by default
  return (
    <aside className={`chatbot-sidebar  ${collapsed ? "collapsed" : ""}`}>
      <div className="flex flex-col gap-3 ">
        {/* HEADER */}
        <div
          id="chatbox-header"
          className="pb-2 flex justify-between items-center font-bold border-b-2 border-[#52595c]"
        >
          <ToggleChat
            open={!collapsed}
            onToggle={(open) => setCollapsed(!open)}
          />

          <div className="flex justify-center items-center text-highlight text-2xl">
            <h1 id="chatbox-title">{APP_CONFIG.chatbot.name}</h1>
            <TbMessageChatbotFilled />
          </div>

          <button id="chatbot-setting" className="action-icon text-lg">
            <BsThreeDots />
          </button>
        </div>

        {/* CHAT  */}
        <div
          id="chat-container"
          className="flex flex-col flex-1 min-h-0 gap-2 max-h-[615px] overflow-y-auto hide-scrollbar"
        >
          {CHAT_MSG.map((chat) => (
            <p
              key={chat.id}
              className={`chat-text ${
                chat.type === "bot" ? "chat-bot" : "chat-user"
              }`}
            >
              {chat.content}
            </p>
          ))}
        </div>
      </div>

      {/* INPUT */}
      <div id="chatbox-user-input" className="flex gap-2">
        <button className="action-icon">
          {/* add media */}
          <RiAddBoxFill />
        </button>

        {/* text input */}
        <div className="bg-main pr-2 flex justify-between items-center gap-2 rounded-md">
          <input
            type="text"
            placeholder="Ask anything"
            className="pl-4 bg-main text-sm h-10"
          />
          <button className="action-icon text-lg">
            <FaMicrophone />
          </button>
        </div>

        <button className="action-icon">
          {/* send message */}
          <RiSendPlane2Fill />{" "}
        </button>
      </div>
    </aside>
  );
};

export default ChatBot;
