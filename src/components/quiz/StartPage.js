import React from "react";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/day1");
  };
  return (
    <div className="flex justify-around h-full mt-10">
      <div className="flex flex-col bg-pink-50 rounded-lg shadow-md p-6 w-full md:w-2/5 lg:w-9/10 lg:h-70vh">
        <div className="text-lg font-noto-sans-sc font-bold text-center">
          心心饲养日记v0.1
        </div>
        <div className="text-sm font-noto-sans-sc text-center">
          《喜欢天降女友的有福了，我要跳楼了。》
        </div>
        <br />
        <div className="flex flex-col basis-1/2">
          <p className="content-start justify-start font-noto-sans-sc font-semibold">
            注意事项：
          </p>
          <p className="content-start font-noto-sans-sc">
            1. 最好不要虐待心心，但随便你。
          </p>
          <p className="content-start font-noto-sans-sc">
            2. 全长7天共8个选项，期间可能会跳转支线结局直接结束。
          </p>
          <p className="content-start font-noto-sans-sc">
            3. 历史选项数据不会被记录，可以多次尝试不同结局。同一周目不能回退。
          </p>
          <p className="content-start font-noto-sans-sc">
            4. 被心心杀死的可能性很低，但不是没有。
          </p>
          <br/>
        </div>
        <button className="justify-center ml-10 mr-10 bg-pink-200 hover:bg-pink-300 text-black font-bold py-2 px-4 rounded"
        onClick={nextPage}>开始游戏</button>
      </div>
    </div>
  );
};

export default StartPage;
