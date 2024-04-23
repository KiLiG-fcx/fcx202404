import logo from './logo.svg';
import './App.css';
import StartPage from './components/quiz/StartPage';
import Question1 from './components/quiz/Quesion1';
import Question2 from './components/quiz/Question2';

import EndingA from './components/endings/EndingA';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/start" element={<StartPage />}></Route>
        <Route path="/day1" element={<Question1 />}></Route>
        <Route path="/day2" element={<Question2 />}></Route>

        <Route path="/beA" element={<EndingA />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
