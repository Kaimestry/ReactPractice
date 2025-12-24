export type ChatMessage = {
  id: string;
  type: "bot" | "user";
  content: string;
};

export const CHAT_MSG: ChatMessage[] = [
  {
    id: "1",
    type: "bot",
    content:
      "Hi 👋 I'm your health assistant. I can help answer general health questions and give lifestyle tips.",
  },
  {
    id: "2",
    type: "bot",
    content:
      "Please note that I don't replace a doctor, but I can guide you in the right direction.",
  },
  {
    id: "3",
    type: "user",
    content: "Hi! I've been feeling tired a lot lately.",
  },
  {
    id: "4",
    type: "bot",
    content:
      "I'm sorry to hear that. Feeling tired can have many causes. May I ask how long this has been happening?",
  },
  {
    id: "5",
    type: "user",
    content: "Probably for the past two weeks.",
  },
  {
    id: "6",
    type: "bot",
    content:
      "Thanks for sharing. Are you getting enough sleep at night (around 7–9 hours)?",
  },
  {
    id: "7",
    type: "user",
    content: "Not really, maybe 5 or 6 hours on weekdays.",
  },
  {
    id: "8",
    type: "bot",
    content:
      "Lack of sleep is a very common cause of fatigue. Stress, diet, and hydration can also play a role.",
  },
  {
    id: "9",
    type: "bot",
    content: "Do you feel tired all day, or mostly in the afternoon?",
  },
  {
    id: "10",
    type: "user",
    content: "Mostly in the afternoon, especially after lunch.",
  },
  {
    id: "11",
    type: "bot",
    content:
      "That can sometimes be related to blood sugar drops or heavy meals.",
  },
  {
    id: "12",
    type: "bot",
    content:
      "You could try lighter lunches, drinking more water, and taking a short walk after eating.",
  },
  {
    id: "13",
    type: "user",
    content: "That makes sense. Should I be worried about something serious?",
  },
  {
    id: "14",
    type: "bot",
    content:
      "Occasional fatigue is usually not serious, especially if it's linked to sleep or lifestyle.",
  },
  {
    id: "15",
    type: "bot",
    content:
      "However, if fatigue continues for several weeks or comes with symptoms like dizziness, weight loss, or shortness of breath, you should see a healthcare professional.",
  },
  {
    id: "16",
    type: "user",
    content: "Got it. I'll try improving my sleep first.",
  },
  {
    id: "17",
    type: "bot",
    content:
      "That's a great first step 👍 Try going to bed at the same time each night and limiting screen time before sleep.",
  },
  {
    id: "18",
    type: "bot",
    content:
      "If you'd like, I can also suggest simple relaxation exercises or sleep tips.",
  },
];
