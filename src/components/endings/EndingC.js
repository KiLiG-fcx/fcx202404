import { useNavigate } from "react-router-dom";
import React from "react";

const EndingC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-around h-full mt-10 font-noto-sans-sc">
      <div className="flex flex-col bg-pink-50 rounded-lg shadow-md p-6 w-full md:w-3/5 lg:w-7/10 lg:h-70vh">
        <div className="text-center font-semibold">昼夜颠倒</div>
        <br />
        <div className="ml-10">
          <div className="flex flex-col">
          睡了一觉，发现原来只是个梦。 <br />
梦里的触感十分真实，只是心心不见了。<br />
躺在床上回味了很久，终于准备下床时，发现床头有个熟悉的发卡。<br /><br/><br/>

<div className="text-sm text-slate-400">
夜色降临后，我忽然体会到了什么是食髓知味。<br />
来路不明的发卡被放在了枕边。<br />

我将昨晚的梦境记录反复读了一遍又一遍，睡前亲吻了发卡上柔软的蝴蝶结飘带，果然又在梦里见到了她。<br /><br />
太好了，再也不想醒来了 ^ ^
</div>



          </div>
          <br />
        </div>
        <button   className="self-center w-1/2 
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

export default EndingC;
