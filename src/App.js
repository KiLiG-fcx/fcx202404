import logo from "./logo.svg";
import "./App.css";
import StartPage from "./components/quiz/StartPage";
import Question1 from "./components/quiz/Quesion1";
import Question2 from "./components/quiz/Question2";
import Question3 from "./components/quiz/Question3";
import Question31 from "./components/quiz/Question31";
import Question4 from "./components/quiz/Question4";
import Question5 from "./components/quiz/Question5";
import Question6 from "./components/quiz/Question6";
import Question7 from "./components/quiz/Question7";

import EndingA from "./components/endings/EndingA";
import EndingB from "./components/endings/EndingB";
import EndingC from "./components/endings/EndingC";
import EndingD from "./components/endings/EndingD";
import Ending1 from "./components/endings/Ending1";
import Ending2 from "./components/endings/Ending2";
import Ending3 from "./components/endings/Ending3";
import Ending4 from "./components/endings/Ending4";
import Ending5 from "./components/endings/Ending5";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/day1" element={<Question1 />}></Route>
        <Route path="/day2" element={<Question2 />}></Route>
        <Route path="/day3" element={<Question3 />}></Route>
        <Route path="/day31" element={<Question31 />}></Route>
        <Route path="/day4" element={<Question4 />}></Route>
        <Route path="/day5" element={<Question5 />}></Route>
        <Route path="/day6" element={<Question6 />}></Route>
        <Route path="/day7" element={<Question7 />}></Route>

        <Route path="/endA" element={<EndingA />}></Route>
        <Route path="/endB" element={<EndingB />}></Route>
        <Route path="/endC" element={<EndingC />}></Route>
        <Route path="/endD" element={<EndingD />}></Route>
        <Route path="/end1" element={<Ending1 />}></Route>
        <Route path="/end2" element={<Ending2 />}></Route>
        <Route path="/end3" element={<Ending3 />}></Route>
        <Route path="/end4" element={<Ending4 />}></Route>
        <Route path="/end5" element={<Ending5 />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
