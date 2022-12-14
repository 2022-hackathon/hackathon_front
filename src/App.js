import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Modal from "./components/Modal";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="test" element={<Modal />}></Route>
      </Routes>
    </>
  );
}
