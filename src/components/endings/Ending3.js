import { useNavigate } from "react-router-dom";
import React from "react";

const Ending3 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-around h-full mt-10 font-noto-sans-sc">
      <div className="flex flex-col bg-pink-50 rounded-lg shadow-md p-6 w-full md:w-3/5 lg:w-7/10 lg:h-70vh">
        <div className="text-center font-semibold">Overdose</div>
        <br />
        <div className="ml-10">
          <div className="flex flex-col">
            不知道心心是怎么做到的，不管我在哪里，她好像都能看到我。
            <br />
            “为什么还不回来陪我？”
            <br />
            在本周第五次收到这样的消息后，比起害怕，我承认更多的是兴奋。
            <br />
            一想到她因为等待时间过长而哀怨的眼神，我决定再迟到五分钟。
            <br />
            <br />
            我需要花费越来越多的时间来陪伴她，也逐渐理解了“上瘾”一词背后的可怕之处。
            <br />
            我对她带来的一切都乐在其中。
            <br />
            好喜欢这种生活。
            <br />
            <b>等会儿再修改一次代码，又可以把她在身边多留七天了。</b>
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

export default Ending3;
