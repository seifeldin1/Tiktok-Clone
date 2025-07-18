import React from "react";

interface MessageBubbleProps {
  message: string;
  isMe: boolean;
  avatar: string;
  timestamp?: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  isMe,
  avatar,
}) => {
  return (
    <div
      className={`flex items-end mb-3 ${
        isMe ? "justify-start" : "justify-end"
      }`}
    >
      {/* Avatar for received messages */}
      {!isMe && (
        <img
          src={avatar}
          alt="avatar"
          className="w-7 h-7 rounded-full mr-4 object-cover"
        />
      )}

      {/* Message bubble */}
      <div
        className={`max-w-xs px-4 py-2 rounded-2xl text-sm leading-snug ${
          isMe
            ? "bg-[#0e7490] text-white rounded-bl-none"
            : "bg-[#2f2f2f] text-white rounded-br-none"
        }`}
      >
        <p>{message}</p>
      </div>

      {/* Avatar for sent messages */}
      {isMe && (
        <img
          src={avatar}
          alt="avatar"
          className="w-7 h-7 rounded-full ml-4 object-cover"
        />
      )}
    </div>
  );
};

export default MessageBubble;

