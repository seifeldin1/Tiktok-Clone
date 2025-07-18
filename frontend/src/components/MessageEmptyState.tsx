const MessageEmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 text-gray-400 bg-black">
      <div className="text-6xl mb-4">💬</div>
      <h2 className="text-2xl font-semibold mb-2">No Conversation Selected</h2>
      <p className="text-sm text-gray-500 text-center max-w-md px-4">
        Select a chat from the sidebar to view messages or start a new
        conversation.
      </p>
    </div>
  );
};

export default MessageEmptyState;
