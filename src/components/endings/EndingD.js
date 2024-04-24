import { useNavigate } from "react-router-dom";
import React from "react";

const EndingD = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-around h-full mt-10 font-noto-sans-sc">
      <div className="flex flex-col bg-pink-50 rounded-lg shadow-md p-6 w-full md:w-3/5 lg:w-7/10 lg:h-70vh">
        <div className="text-center font-semibold">狗</div>
        <br />
        <div className="ml-10">
          <div className="flex flex-col">
            当s会笑场，
            <br />
            当m会还手，
            <br />
            而当心心的狗刚刚好。
            <br />
            <br />
            <div className=" text-slate-400">
            兄弟，你好香。
            </div>
            
          </div>
          <br />
        </div>
        <button
          className="self-center w-1/2 
        bg-pink-200 hover:bg-pink-300 text-black font-bold py-2 px-4 rounded
       "
          onClick={() => {
            navigate("/");
          }}
        >
          重新开始
        </button>
      </div>
    </div>
  );
};

export default EndingD;
