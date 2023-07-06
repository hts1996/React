import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import {RecoilRoot} from "recoil";
function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
    
  );
}

export default App;
