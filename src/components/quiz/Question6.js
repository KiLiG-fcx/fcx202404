import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Question6 = ({ item }) => {
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
    navigate("/day7", { state: params });
  };

  const toEndD = () => {
    navigate("/endD"); //跳转结局，不传参
  };

  return (
    <div className="flex justify-around h-full mt-10 font-noto-sans-sc">
      <div className="flex flex-col bg-pink-50 rounded-lg shadow-md p-6 w-full md:w-3/5 lg:w-9/10 lg:h-70vh">
        <div className="text-3xl font-bold">Day 6</div>
        <br />
        <div>
          今天路过商店，想给心心买点东西。
          <br />
          并不是什么特别的节日，商家也没有任何的打折促销。
          <br />
          几天相处下来，好像有点清楚她会喜欢什么了。
          <br />
          要带点什么回家呢？
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
              updateData(prevFavor + 20, prevGloom - 20);
              setAnswer(1);
              setEnd(false);
            }}
          >
            python编程从入门到入土
          </button>
          <button
            className={`${
              answer === 2 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10 mt-2`}
            onClick={() => {
              updateData(prevFavor + 60, prevGloom-20);
              setAnswer(2);
              setEnd(false);
            }}
          >
            大型分布式网站架构设计与实践
          </button>
          <button
            className={`${
              answer === 3 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10 mt-2`}
            onClick={() => {
              updateData(prevFavor + 20, prevGloom -20);
              setAnswer(3);
              setEnd(false);
            }}
          >
            超大jelly cat玩偶
          </button>
          <button
            className={`${
              answer === 4 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10 mt-2`}
            onClick={() => {
              updateData(prevFavor, prevGloom + 100);
              setAnswer(4);
              setEnd(false);
            }}
          >
            不正经的电动小玩具
          </button>
          <button
            className={`${
              answer === 5 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10 mt-2`}
            onClick={() => {
              setAnswer(5);
              setEnd(true);
            }}
          >
           没钱，不买。我自己就是她的礼物。
          </button>
        </div>
        <button
          className={`${chosen ? "" : "cursor-not-allowed"} 
          self-end mr-10 w-1/3 bg-pink-200
           hover:bg-pink-300 text-black font-bold py-2 px-4 
           rounded mt-6`}
          onClick={() => {
            if (end === true) {
              toEndD();
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

export default Question6;
