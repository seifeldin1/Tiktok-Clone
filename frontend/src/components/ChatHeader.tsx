interface ChatHeaderProps {
  user: {
    name: string;
    avatar: string;
  } | null;
}

const ChatHeader = ({ user }: ChatHeaderProps) => {
  return (
    <div className="p-3 border-b border-gray-700 bg-black text-white">
      <div className="flex items-center justify-between">
        {user ? (
          <div className="flex items-center gap-3">
            <img src={user.avatar} alt={user.name + "'s avatar"} className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-sm font-semibold">{user.name}</p>
              <p className="text-xs text-gray-400">Online</p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
