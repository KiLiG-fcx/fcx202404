import { useNavigate } from "react-router-dom";
import React from "react";

const EndingA = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex">
        什么事情也没有发生，看来是逃过了一个潜在的危险。
        <br />
        太好了。
      </div>
      <button
      onClick={()=>{
        navigate("/");
      }}
      >重新开始</button>
    </div>
  );
};

export default EndingA;
