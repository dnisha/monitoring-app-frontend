import Cpu from "./Cpu";
import Resources from "./Resources";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cpu></Cpu>} />
        <Route path="/resource" element={<Resources></Resources>} />
      </Routes>
    </Router>
  );
}

export default App;
