import MessageBubble from "./MessageBubble";

interface ChatMessagesProps {
  selectedUser: {
    id: number;
    name: string;
    avatar: string;
  };
}

const ChatMessages = ({ selectedUser }: ChatMessagesProps) => {
  const messages = [
    { id: 1, text: "Hey there!", isMe: false },
    { id: 2, text: "Hi! What's up?", isMe: true },
    { id: 3, text: "All good, thanks.", isMe: false },
  ];

  const myAvatar = "/avatar.png";

  return (
    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-1 bg-black">
      <div className="text-center text-xs text-gray-400 my-2">
        April 6, 2025
      </div>
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          message={msg.text}
          isMe={msg.isMe}
          avatar={msg.isMe ? myAvatar : selectedUser.avatar}
        />
      ))}
    </div>
  );
};

export default ChatMessages;