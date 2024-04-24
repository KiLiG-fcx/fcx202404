import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Question2 = ({ item }) => {
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
    navigate("/day3", { state: params });
  };

  return (
    <div className="flex justify-around h-full mt-10 font-noto-sans-sc">
      <div className="flex flex-col bg-pink-50 rounded-lg shadow-md p-6 w-full md:w-3/5 lg:w-9/10 lg:h-70vh">
        <div className="text-3xl font-bold">Day 2</div>
        <br />
        <div>
          确实不是什么危险的东西。
          <br />
          至少看起来是这样的。
          <br />
          只知道这个神秘生物的名字是心心，没有多余信息了。
          <br />
          太缺德了，在别人门口随便丢东西还不给饲养说明书。
          <br />
          虽然嘴上这样碎碎念，但还是把睡着的心心放在床上了。
          <br />
          <br />
          心心似乎被灯光晃醒了，张着嘴在说什么，凑近了才知道她在小声说饿了。
          <br />
          什么好人晚上十一点要吃东西啊。（一边吃零食一边打字。）
          <br />
          要找点什么喂食呢？
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
              updateData(prevFavor + 20, prevGloom - 10);
              setAnswer(1);
            }}
          >
            草莓蛋糕
          </button>
          <button
            className={`${
              answer === 2 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10 mt-2`}
            onClick={() => {
              updateData(prevFavor + 10, prevGloom);
              setAnswer(2);
            }}
          >
            昨天吃剩的半块饼干
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
            TypeC充电线
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
            反正这玩意儿看起来傻得很，于是把自己的手指伸了进去。
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

export default Question2;
