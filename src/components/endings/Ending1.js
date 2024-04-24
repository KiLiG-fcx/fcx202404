import { useNavigate } from "react-router-dom";
import React from "react";

const Ending1 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-around h-full mt-10 font-noto-sans-sc">
      <div className="flex flex-col bg-pink-50 rounded-lg shadow-md p-6 w-full md:w-3/5 lg:w-7/10 lg:h-70vh">
        <div className="text-center font-semibold">
          能解锁这个结局也算是一种本事
        </div>
        <br />
        <div className="ml-10">
          <div className="flex flex-col">
            没有等我再说些什么，心心在某一天悄悄离开了。
            <br />
            我有种如释重负的感觉，这些天的闹剧算是告一段落了。
            <br />
            然而此后，我耳边频繁响起心心的声音，问我为什么不去找她，为什么不爱她了。
            <br />
            这种离谱的事情，说出去也没人会相信，我决定再忍忍。
            <br />
            <br />
            一个深夜，我再次被这个声音惊醒，发现她真的蹲在我的床边看着我。
            <br />
            还没来得及弹坐起来问她在干什么，我就晕了过去。手上和脖子上似乎有被束缚的触感，但我已经失去了挣扎的力气。
            <br />
            <br />
            <br />
            <div className="font-semibold">
              “别这样对我。”
              <br />
              都说了最好别虐待心心了。
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

export default Ending1;
