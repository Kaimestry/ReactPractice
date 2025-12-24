export type ChatMessage = {
  id: string;
  type: "bot" | "user";
  content: string;
};

export const CHAT_MSG: ChatMessage[] = [
  {
    id: "1",
    type: "bot",
    content: "Hi I am a bot",
  },
  {
    id: "2",
    type: "bot",
    content: "I'm here because Kaimestry coded me",
  },
  {
    id: "3",
    type: "user",
    content: "Nice to meet you!",
  },
];
