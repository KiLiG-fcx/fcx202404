import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Question31 = ({ item }) => {
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
    navigate("/day4", { state: params });
  };

  
  const toEndB = () => {
    navigate("/endB"); //跳转结局，不传参
  };

  return (
    <div className="flex justify-around h-full mt-10 font-noto-sans-sc">
      <div className="flex flex-col bg-pink-50 rounded-lg shadow-md p-6 w-full md:w-3/5 lg:w-9/10 lg:h-70vh">
        <div className="text-3xl font-bold">Day 3.5</div>
        <br />
        <div>
          忙了一天回到家，发现家里乱糟糟的。
          <br />
          环视了一圈没有看到心心的身影，总觉得是潜伏起来了。
          <br />
          确认家里并没有少什么重要财物，就连内裤都没丢，那大概就知道这是谁的恶作剧了。
          <br />
          成年人的破防只在一瞬间。
          <br />
          前天刚打扫过的房子又要重新大扫除了，而且罪魁祸首肇事逃逸。
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
              updateData(prevFavor + 50, prevGloom - 20);
              setAnswer(1);
              setEnd(false);
              console.log(favor, gloom);
            }}
          >
            不管怎么说先把心心找出来吧，犯不着跟傻子生气。
          </button>
          <button
            className={`${
              answer === 2 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10 mt-2`}
            onClick={() => {
              updateData(prevFavor -20, prevGloom+10);
              setAnswer(2);
              setEnd(false);
            }}
          >
            迅速拎出了罪魁祸首，并威胁她说再有下一次就把你关起来没日没夜地写代码。
          </button>
          <button
            className={`${
              answer === 3 ? "bg-pink-300" : "bg-white"
            }  hover:bg-gray-100
            text-gray-800 font-semibold py-2 px-4 border
            border-gray-400 rounded shadow mr-10 mt-2`}
            onClick={() => {
              updateData(prevFavor + 20, prevGloom + 10);
              setAnswer(3);
              setEnd(false);
            }}
          >
            默默打扫了房间，什么也没说，并启动了原神。
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
              setEnd(true);
            }}
          >
            还好快递盒并没有丢掉，趁她还没有赖上自己，赶紧打包了，找下一个好人家丢掉吧。哈哈，不知道谁是那个冤大头，反正不是我。
          </button>
        </div>
        <button
          className={`${chosen ? "" : "cursor-not-allowed"} 
          self-end mr-10 w-1/3 bg-pink-200
           hover:bg-pink-300 text-black font-bold py-2 px-4 
           rounded mt-6`}
          onClick={() => {
            if (end === true) {
              toEndB();
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

export default Question31;
