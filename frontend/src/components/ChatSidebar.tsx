
interface User {
  id: number;
  name: string;
  avatar: string;
}

interface ChatSidebarProps {
  onSelectUser: (user: User) => void;
}

const ChatSidebar = ({ onSelectUser }: ChatSidebarProps) => {
  const users: User[] = [
    { id: 1, name: "Amr Ashraf", avatar: "/avatar.png" },
    { id: 2, name: "Khalid Ashraf", avatar: "/avatar.png" },
  ];

  return (
    <div className="w-80 bg-black p-4 border-r border-gray-800">
      <h2 className="text-xl font-bold mb-4">Chats</h2>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded"
            onClick={() => onSelectUser(user)}
          >
            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
