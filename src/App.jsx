import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstQuestion from "./components/FirstQuestion";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/first" element={<FirstQuestion></FirstQuestion>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
