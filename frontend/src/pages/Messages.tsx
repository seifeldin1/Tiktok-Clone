import { useState } from "react";
import ChatSidebar from "../components/ChatSidebar";
import ChatHeader from "../components/ChatHeader";
import MessageEmptyState from "../components/MessageEmptyState";
import ChatMessages from "../components/ChatMessages";

interface User {
  id: number;
  name: string;
  avatar: string;
}

function Messages() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <ChatSidebar onSelectUser={setSelectedUser} />

      {/* Right panel */}
      <div className="flex flex-col flex-1 border-l border-gray-800">
        {selectedUser ? (
          <>
            <ChatHeader user={selectedUser} />
            <ChatMessages selectedUser={selectedUser} />
          </>
        ) : (
          <>
            <MessageEmptyState />
          </>
        )}
      </div>
    </div>
  );
}

export default Messages;
