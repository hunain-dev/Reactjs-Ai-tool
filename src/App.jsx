import React, { useState } from 'react';
import Sidebar from './Common/Sidebar';
import { FaArrowTrendUp } from "react-icons/fa6";

const App = () => {
  const [Askquestion, setAskquestion] = useState("")


  const Questionhandler = (e) =>{
    e.preventDefault();
    setAskquestion('')
    console.log("your Quesiton is", Askquestion)
  }


  return (
    <div className="h-screen w-full flex bg-gradient-to-l from-amber-50 to-white">
      
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right main content */}
      <div className=" Actay flex items-center justify-between flex-col h-screen  p-4 w-full">
        <div className='h-[10vh] flex items-center justify-center w-full'>
          <h2 className=' text-center Actay text-[1.6vw] '>Hellow Users Ask me Everything</h2>
        </div>
        <div className=' w-full'>
        <div className=" flex items-center justify-center  px-25 p-4   rounded-3xl ">
      <form  className='h-full w-full' onSubmit={Questionhandler}>
      <input
      value={Askquestion}
      onChange={(e)=>{
        setAskquestion(e.target.value)

      }}
        type="text"
        placeholder="Type your message..."
        className="flex-1  text-black rounded-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black placeholder-gray border-1 border-gray-500 "
      />

      {/* Send button */}
      <button  className="ml-2 bg-black  text-white p-3 rounded-full ">
      <FaArrowTrendUp className='text-2xl' />

      </button>
      </form>

    </div>
        </div>
       
      
      </div>

    </div>
  );
};

export default App;
