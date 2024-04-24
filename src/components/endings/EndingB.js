import { useNavigate } from "react-router-dom";
import React from "react";

const EndingB = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-around h-full mt-10 font-noto-sans-sc">
      <div className="flex flex-col bg-pink-50 rounded-lg shadow-md p-6 w-full md:w-3/5 lg:w-7/10 lg:h-70vh">
        <div className="text-center font-semibold">人生就是要学会踢皮球</div>
        <br />
        <div className="ml-10">
          <div className="flex flex-col">
            心心的出现只是一个小插曲，生活复归平静。
            <br />
            之后，再也没有收到过神秘快递，当然也不希望重蹈覆辙了，真的很麻烦。
            <br />
            <br />
            以后每天都可以安静地玩原神啦。
            <br />
            <br />
            <br />
            兄弟，别这样。
            <br />
            <br />
            <div className="text-xl">
            不要丢掉心心啊！</div>
            <br />
            <br />
            <br />
            <div className="font-semibold text-2xl">
            不 要 丢 掉 我 !!!!
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

export default EndingB;
