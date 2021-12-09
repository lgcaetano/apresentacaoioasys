import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstQuestion from "./components/FirstQuestion";
import Landing from "./components/Landing";
import SecondQuestion from "./components/SecondQuestion";
import ThirdQuestion from "./components/ThirdQuestion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/first" element={<FirstQuestion></FirstQuestion>}></Route>
        <Route path="/second" element={<SecondQuestion></SecondQuestion>}></Route>
        <Route path="/third" element={<ThirdQuestion></ThirdQuestion>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
