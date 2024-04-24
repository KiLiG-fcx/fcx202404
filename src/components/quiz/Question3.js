import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Question3 = ({ item }) => {
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
    const params = { favor: favor, gloom: gloom };
    navigate("/day31", { state: params });
  };

  return (
    <div className="flex justify-around h-full mt-10 font-noto-sans-sc">
      <div className="flex flex-col bg-pink-50 rounded-lg shadow-md p-6 w-full md:w-3/5 lg:w-9/10 lg:h-70vh">
        <div className="text-3xl font-bold">Day 3</div>
        <br />
        <div>
          终于把这小东西哄睡了。
          <br />
          第二天还要上班，早点睡吧。
          <br />
          醒来后发现心心还在身边熟睡，听到起床的动静后她也醒了。
          <br />
          “你要去哪里啊？”
          <br />
          “去上班哦。”
          <br />
          “那带上我好不好？”
          <br />
          “公司不许带宠物。”
          <br />
          “呜呜呜。”
          <br />
          心心抱住你的手臂不肯放开。
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
              updateData(prevFavor, prevGloom + 10);
              setAnswer(1);
              //console.log(favor, gloom);
            }}
          >
            拎着后颈肉随意丢到椅子上，跟她说饿了自己吃泡面。
          </button>
          <button
            className={`${
              answer === 2 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10 mt-2`}
            onClick={() => {
              updateData(prevFavor + 20, prevGloom-10);
              setAnswer(2);
            }}
          >
            给心心梳毛洗脸，给她准备了一整天的食物。（这里假设玩家的厨艺十分高超）
          </button>
          <button
            className={`${
              answer === 3 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10 mt-2`}
            onClick={() => {
              updateData(prevFavor - 20, prevGloom + 10);
              setAnswer(3);
            }}
          >
           你是想窃取公司机密吧？我是不会上当的，给我乖乖待在家里。
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
            }}
          >
            呵呵，得寸进尺的小东西。将心心捆住锁在床头，警告她少给自己惹事。
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

export default Question3;
