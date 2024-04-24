import { useNavigate } from "react-router-dom";
import React from "react";

const Ending2 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-around h-full mt-10 font-noto-sans-sc">
      <div className="flex flex-col bg-pink-50 rounded-lg shadow-md p-6 w-full md:w-3/5 lg:w-7/10 lg:h-70vh">
        <div className="text-center font-semibold">老公你说句话呀</div>
        <br />
        <div className="ml-10">
          <div className="flex flex-col">
            就这样继续收养了心心，她也没有抗拒的意思。
            <br />
            做！做！做！一做起来就发狠了，忘情了，没命了！
            <br />
            百十个斜背响鼓的后生，如百十块被强震不断击起的石头，狂舞在你的面前。骤雨一样，是急促的鼓点；
            <br />
            旋风一样，是飞扬的流苏；乱蛙一样，是蹦跳的脚步；火花一样，是闪射的瞳仁；
            <br />
            斗虎一样，是强健的风姿。黄土高原上，爆出一场多么壮阔、多么豪放、多么火烈的舞蹈哇
            <br />
            ——安塞腰鼓！
            <br />
            <br />
            <div className="text-sm text-slate-400">
              这个结局只要看前两行就好了。
            </div>
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

export default Ending2;
