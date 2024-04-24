import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Question5 = ({ item }) => {
  const location = useLocation();
  const prevFavor = location.state.favor;
  const prevGloom = location.state.gloom;
  const [favor, setFavor] = useState(prevFavor);
  const [gloom, setGloom] = useState(prevGloom);
  const [chosen, setChosen] = useState(false);
  const [answer, setAnswer] = useState(0);

  const navigate = useNavigate();

  const updateData = (favorChange, gloomChange) => {
    setFavor(favorChange);
    setGloom(gloomChange);
    // 初始数值均默认为0，因此直接修改数据，无传入参数
    setChosen(true);
    // 已选择，可继续
  };

  const nextPage = () => {
    const params = {favor: favor, gloom:gloom};
    navigate("/day6", { state: params });
  };

  return (
    <div className="flex justify-around h-full mt-10 font-noto-sans-sc">
      <div className="flex flex-col bg-pink-50 rounded-lg shadow-md p-6 w-full md:w-3/5 lg:w-9/10 lg:h-70vh">
        <div className="text-3xl font-bold">Day 5</div>
        <br />
        <div>
          只是出门买了个晚饭的食材，回来就发现心心躺在地板上一动不动。 <br />
          发生什么了？
          <br />
          晃了几下发现对方仍然没有动静，但是很明显还是有呼吸的。
          <br />
          好像是在装死。
          <br />
          <br />
          不太理解这个家伙的脑回路，所以
        </div>
        <div className="flex flex-col mt-10">
          {/* 选项 */}
          <button
            className={`${
              answer === 1 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10`}
            onClick={() => {
              updateData(prevFavor + 50, prevGloom - 20);
              setAnswer(1);
            }}
          >
            把做好的晚饭放在心心面前引诱一下，并且故意自己吃得很香。
          </button>
          <button
            className={`${
              answer === 2 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10 mt-2`}
            onClick={() => {
              updateData(prevFavor -20, prevGloom+20);
              setAnswer(2);
            }}
          >
            冷脸把心心揪了起来，说不许再恶作剧了，不然把你卖了，让你没日没夜地加班还不给钱。
          </button>
          <button
            className={`${
              answer === 3 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10 mt-2`}
            onClick={() => {
              updateData(prevFavor , prevGloom + 100);
              setAnswer(3);
            }}
          >
            踢了几脚，在耳边恶魔低语“再不醒的话我要蹂躏你了”。但还没说完就直接扑了上去。
          </button>
          <button
            className={`${
              answer === 4 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10 mt-2`}
            onClick={() => {
              updateData(prevFavor-50, prevGloom + 20);
              setAnswer(4);
            }}
          >
            冷笑一声，不理她，开始看肌肉男视频，感叹自己的身材真是太曼妙了。
          </button>
        </div>
        <button
          className={`${chosen ? "" : "cursor-not-allowed"} 
          self-end mr-10 w-1/3 bg-pink-200
           hover:bg-pink-300 text-black font-bold py-2 px-4 
           rounded mt-6`}
          onClick={() => {
            if (chosen === true) {
              nextPage();
            }
          }}
        >
          选好了，进入下一天
        </button>
      </div>
    </div>
  );
};

export default Question5;
