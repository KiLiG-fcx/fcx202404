import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Question4 = ({ item }) => {
  const location = useLocation();
  const prevFavor = location.state.favor;
  const prevGloom = location.state.gloom;
  const [favor, setFavor] = useState(prevFavor);
  const [gloom, setGloom] = useState(prevGloom);
  const [chosen, setChosen] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [end, setEnd] = useState(false);

  const navigate = useNavigate();

  const updateData = (favorChange, gloomChange) => {
    setFavor(favorChange);
    setGloom(gloomChange);
    // 初始数值均默认为0，因此直接修改数据，无传入参数
    setChosen(true);
    // 已选择，可继续
  };

  const nextPage = () => {
    const params = { favor: favor, gloom: gloom };
    navigate("/day5", { state: params });
  };

  const toEndC = () => {
    navigate("/endC"); //跳转结局，不传参
  };

  return (
    <div className="flex justify-around h-full mt-10 font-noto-sans-sc">
      <div className="flex flex-col bg-pink-50 rounded-lg shadow-md p-6 w-full md:w-3/5 lg:w-9/10 lg:h-70vh">
        <div className="text-3xl font-bold">Day 4</div>
        <br />
        <div>
          今天是周末。
          <br />
          工作了一个星期就是为了等着这一刻哈哈我真是一秒也忍不下去了再不放假我就要开始阴暗爬行了！
          <br />
          心心说这几天一直都待在家里，想出去看看。
          <br />
          这么久以来习惯了一个人度过的周末，今天依旧要保持这个优秀的习惯，自己出门吗？
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
              setEnd(false);
              console.log(favor, gloom);
            }}
          >
            带上心心和好吃的一起出门吧，她看起来好想出去玩。
          </button>
          <button
            className={`${
              answer === 2 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10 mt-2`}
            onClick={() => {
              updateData(prevFavor + 20, prevGloom);
              setAnswer(2);
              setEnd(false);
            }}
          >
            当然是自己出门了，心心活着就行。于是疯狂地在健身房比划了一天！
          </button>
          <button
            className={`${
              answer === 3 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10 mt-2`}
            onClick={() => {
              updateData(prevFavor + 20, prevGloom + 20);
              setAnswer(3);
              setEnd(false);
            }}
          >
            躺在家和心心玩了一天的恐怖游戏，顺便把瑟瑟发抖的心心当抱枕。
          </button>
          <button
            className={`${
              answer === 4 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10 mt-2`}
            onClick={() => {
              updateData(prevFavor-20, prevGloom + 100);
              setAnswer(4);
              setEnd(false);
            }}
          >
           把心心用链条拴着。不要打扰我写代码。
          </button>
          <button
            className={`${
              answer === 5 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10 mt-2`}
            onClick={() => {
              updateData(prevFavor, prevGloom + 100);
              setAnswer(5);
              setEnd(true);
            }}
          >
           建议不要选择这个选项，但如果真的很想，那么可以和心心在床上疯狂地度过一天。
          </button>
        </div>
        <button
          className={`${chosen ? "" : "cursor-not-allowed"} 
          self-end mr-10 w-1/3 bg-pink-200
           hover:bg-pink-300 text-black font-bold py-2 px-4 
           rounded mt-6`}
          onClick={() => {
            if (end === true) {
              toEndC();
            } else if (chosen === true) {
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

export default Question4;
