import { useNavigate } from "react-router-dom";
import React from "react";

const Ending5 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-around h-full mt-10 font-noto-sans-sc">
      <div className="flex flex-col bg-pink-50 rounded-lg shadow-md p-6 w-full md:w-3/5 lg:w-7/10 lg:h-70vh">
        <div className="text-center font-semibold">
          数值过于普通，不如卖杨枝甘露
        </div>
        <br />
        <div className="ml-10">
          <div className="flex">
            心心什么的并不重要，反正以后也是在公司门口卖杨枝甘露!（放芒果）（放柚子）（为了节省水果成本而加入糯米团子和脆波波）（为了占据空间加入冰块）
            （加入糖浆）（加入椰浆）（装进盒子）（递给前领导和同事）（掏出心心照片看一眼）（趁没有人排队偷偷给椰浆兑水）
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

export default Ending5;
