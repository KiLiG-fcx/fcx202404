import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Question2 = ({ item }) => {
  const location = useLocation();
  const {prevFavor, prevGloom} = location.state; //获取上一日数值
  const [favor, setFavor] = useState(prevFavor);
  const [gloom, setGloom] = useState(prevGloom);
  const [chosen, setChosen] = useState(false);

  const navigate = useNavigate();

  const updateData = (favorChange, gloomChange) => {
    setFavor(favorChange);
    setGloom(gloomChange);
    // 初始数值均默认为0，因此直接修改数据，无传入参数
    setChosen(true);
    // 已选择，可继续
  };

  const nextPage = () => {};
  return (
    <div className="flex flex-col justify-center content-center">
      <div className="text-3xl">Day 2</div>
      <div>
        确实不是什么危险的东西。 至少看起来是这样的。
        <br />
        只知道这个神秘生物的名字是心心，没有多余信息了。
        <br />
        太缺德了，在别人门口随便丢东西还不给个饲养说明书。
        <br />
        虽然嘴上这样碎碎念，但还是把睡着的心心放在床上了。
        <br />
        心心似乎被灯光晃醒了，张着嘴在说什么，凑近了才知道她在小声说饿了。
        <br />
        什么好人晚上十一点要吃东西啊。（一边吃零食一边打字。）
        <br />
        要找点什么喂食呢？
      </div>
      <div className="flex flex-col w-1/2">
        {/* 选项 */}
        <button
          className="bg-white hover:bg-gray-100
         text-gray-800 font-semibold py-2 px-4 border
         border-gray-400 rounded shadow"
          onClick={() => {
            updateData(20, -10);
          }}
        >
          草莓蛋糕
        </button>
        <button
          className="bg-white hover:bg-gray-100
         text-gray-800 font-semibold py-2 px-4 border
          border-gray-400 rounded shadow"
          onClick={() => {
            updateData(10);
          }}
        >
          昨天吃剩的半块饼干
        </button>
        <button
          className="bg-white hover:bg-gray-100
         text-gray-800 font-semibold py-2 px-4 border
          border-gray-400 rounded shadow"
          onClick={() => {
            updateData(-20, 10);
            console.log(favor, gloom);
          }}
        >
          typec充电线
        </button>
        <button
          className="bg-white hover:bg-gray-100
         text-gray-800 font-semibold py-2 px-4 border
          border-gray-400 rounded shadow"
          onClick={() => {
            updateData(0, 100);
            console.log(favor, gloom);
          }}
        >
          反正这玩意儿看起来傻得很，于是把自己的手指伸了进去
        </button>
      </div>
      <button>选好了，进入下一天</button>
    </div>
  );
};

export default Question2;
