import { Route, Router, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/mypage" element={<MyPage />}></Route>
      </Routes>
    </>
  );
}
