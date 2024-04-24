import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Question7 = ({ item }) => {
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

  const nextPage = (finalFavor, finalGloom) => {
    if (finalGloom >=580){
      navigate("/end1");
    }
    else if (finalGloom >=250) {
      navigate("/end2");
    }
    else if(finalFavor >=365){
      navigate("/end3");
    }
    else if(finalFavor >=170){
      navigate("/end4");
    }
    else{
      navigate("/end5");
    }
  };

  return (
    <div className="flex justify-around h-full mt-10 font-noto-sans-sc">
      <div className="flex flex-col bg-pink-50 rounded-lg shadow-md p-6 w-full md:w-3/5 lg:w-9/10 lg:h-70vh">
        <div className="text-3xl font-bold">Day 7</div>
        <br />
        <div>
          这次心心真的不见了。
          <br />
          不管是床底、衣柜还是锅里都没有找到。喊了很多遍名字也没反应。
          <br />
          家里就像什么也没发生过一样。
          <br />
          她又在打什么坏主意呢？
          <br />
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
              updateData(prevFavor - 50, prevGloom + 50);
              setAnswer(1);
            }}
          >
            可能是在做梦吧，不管她了
          </button>
          <button
            className={`${
              answer === 2 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10 mt-2`}
            onClick={() => {
              updateData(prevFavor + 50, prevGloom - 20);
              setAnswer(2);
            }}
          >
            我没受过这种委屈，于是坐在地上哭了起来。
          </button>
          <button
            className={`${
              answer === 3 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10 mt-2`}
            onClick={() => {
              updateData(prevFavor + 100, prevGloom - 100);
              setAnswer(3);
            }}
          >
            偷偷修改此游戏的代码让心心永远也不会离开自己
          </button>
          <button
            className={`${
              answer === 4 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10 mt-2`}
            onClick={() => {
              updateData(prevFavor - 200, prevGloom + 100);
              setAnswer(4);
            }}
          >
            打开手机开始浏览美女。
          </button>
        </div>
        <button
          className={`${chosen ? "" : "cursor-not-allowed"} 
          self-end mr-10 w-1/3 bg-pink-200
           hover:bg-pink-300 text-black font-bold py-2 px-4 
           rounded mt-6`}
          onClick={() => {
            if (chosen === true) {
              nextPage(favor,gloom);
            }
          }}
        >
          选好了，进入结局页
        </button>
      </div>
    </div>
  );
};

export default Question7;
