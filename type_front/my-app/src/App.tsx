import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import {RecoilRoot} from "recoil";
import Detail from "./routes/Detail";

const App:React.FC=() => {
  return (
    <>
      <RecoilRoot>
      <BrowserRouter>
      <Header />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Detail />}/>
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
    </>
  );
}

export default App;
