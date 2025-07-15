import { X } from "lucide-react";


const ChatHeader = () => {
  return (
    <div className='p-2.5 border-b border-base-300'>
      <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            {/*avatar */}
            <div className='avatar'>
              <div className='size-10 rounded-full relative'>
                  <img src="/avatar.png" alt="user" />
              </div>
            </div>
            {/*User Info */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-xl">Amr Ashraf</h3>
              <p className={`text-sm text-base-content `}>Online</p>
            </div>
          </div>
          {/*close button */}
          <button>
            <X />
          </button>
      </div>
    </div>
  );
};

export default ChatHeader