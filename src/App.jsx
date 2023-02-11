import {Routes, Route} from 'react-router-dom'
import About from "./pages/About";
import Watch from "./pages/Watch";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </div>
  );
}

export default App;
