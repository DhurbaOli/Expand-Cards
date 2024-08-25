
import React, { useState } from 'react';

const Card = ({ id,title, content, icon, isOpen, onClick }) => {
  const [openCard, setOpenCard] = useState(null);
 // const [isClose, setIsClose] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white border rounded-[20px]  shadow-md"
      onClick={onClick}
      >
        <div
          className="p-2 cursor-pointer min-h-6"
         // onClick={() => setIsOpen(!isOpen)}
          
        >
          <h2 className={`text-xl font-semibold  flex flex-row ${isOpen ? 'text-pink-400':'text-gray-400'}`}>{icon}{title}</h2>
        </div>
        <div className={`transition-max-height duration-300 ease-in-out overflow-hidden  ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="p-4 cursor-pointer" 
          // onClick={()=>setIsClose(!isClose)}
          >
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
