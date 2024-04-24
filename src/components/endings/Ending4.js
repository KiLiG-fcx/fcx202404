import { useNavigate } from "react-router-dom";
import React from "react";

const Ending4 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-around h-full mt-10 font-noto-sans-sc">
      <div className="flex flex-col bg-pink-50 rounded-lg shadow-md p-6 w-full md:w-3/5 lg:w-7/10 lg:h-70vh">
        <div className="text-center font-semibold">
          也许是唯一世俗意义上的happy ending
        </div>
        <br />
        <div className="ml-10">
          <div className="flex">
            这下真的拥有天降女友了。
            <br />
            感谢一周前的神秘快递盒，寄件人是谁，目的是什么，都不重要了。
            <br />
            今天也在明目张胆地偏爱心心。嘿嘿^ ^
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

export default Ending4;
