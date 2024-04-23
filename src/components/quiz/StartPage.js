import React from "react";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/day1");
  }
  return (
    <div className="flex flex-col basis-9/12">
      <div className="text-lg">心心饲养日记v0.1阴暗出逃版</div>
      <div className="text-sm">喜欢天降女友的有福了，我要跳楼了。</div>
      <div className="flex flex-col basis-1/2">
        <p className="content-start justify-start">注意事项：</p>
        <p className="content-start">心心是一种不一定是人类的神秘生物，可以随便想象。最好不要虐待心心，但随便你。</p>
        <p className="content-start">部分结局可能有彩蛋文字以弹窗形式出现。</p>
        <p>历史选项数据不会被记录，可以多次尝试不同结局。同一周目不能回退。</p>
        <p>主角一切台词/行为与作者无关喵^ ^</p>
      </div>
      <button onClick={nextPage}>开始游戏</button>
    </div>
  );
};

export default StartPage;
