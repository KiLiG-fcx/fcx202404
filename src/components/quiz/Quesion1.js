import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Question1 = () => {
  const [favor, setFavor] = useState(0);
  const [gloom, setGloom] = useState(0);
  const [chosen, setChosen] = useState(false);
  const [end, setEnd] = useState(false);

  const navigate = useNavigate();

  const updateData = (favorChange, gloomChange) => { //更新数值
    setFavor(favorChange);
    setGloom(gloomChange);
    // 初始数值均默认为0，因此直接修改数据，无传入参数
    setChosen(true);
    // 已选择，可继续
  };

  const nextPage = () => {
    navigate("/day2", { state: { favor, gloom } });
  };

  const toEndA = () =>{
    navigate("/beA"); //跳转结局，不传参
  }

  return (
    <div className="flex flex-col justify-center content-center">
      <div className="text-3xl">Day 1</div>
      <div>
        下班回到家，发现门口意外出现了一个包装精致但是没有写寄件人信息的快递盒。
        <br /> 看起来像是一个恶作剧。
        <br /> 要不要带回家看看？
      </div>
      <div className="flex flex-col w-1/2">
        {/* 选项 */}
        <button
          className="bg-white hover:bg-gray-100
         text-gray-800 font-semibold py-2 px-4 border
         border-gray-400 rounded shadow"
          onClick={() => {
            updateData(-20, 0);
            setEnd(false);
            console.log(favor, gloom);
          }}
        >
          对着箱子敲打一通，应该没什么问题，遂一脚踢进家里。
        </button>
        <button
          className="bg-white hover:bg-gray-100
         text-gray-800 font-semibold py-2 px-4 border
          border-gray-400 rounded shadow"
          onClick={() => {
            updateData(20, -10);
            setEnd(false);
            console.log(favor, gloom);
          }}
        >
          感觉好可爱，小心地抱回家。
        </button>
        <button
          className="bg-white hover:bg-gray-100
         text-gray-800 font-semibold py-2 px-4 border
          border-gray-400 rounded shadow"
          onClick={() => {
            updateData(10, 10);
            setEnd(false);
            console.log(favor, gloom);
          }}
        >
          要不先不管了，看看第二天会发生什么吧……
        </button>
        <button
          className="bg-white hover:bg-gray-100
         text-gray-800 font-semibold py-2 px-4 border
          border-gray-400 rounded shadow"
          onClick={() => {
            setEnd(true);
          }}
        >
          滚。弃之。
        </button>
      </div>
      <button className={`${chosen?"":"cursor-not-allowed"}`}
      onClick={
        ()=>{
            if (end === true){
                toEndA();
            }
            else if (chosen === true){
                nextPage();
            }
        }
      }>选好了，进入下一天</button>
    </div>
  );
};

export default Question1;
