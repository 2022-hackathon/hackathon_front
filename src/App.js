import Header from "./components/common/Header";
import Home from "./pages/Home";
import { Route, Router } from "react-router-dom";
import MyPage from "./pages/MyPage";
export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
      </Router>
    </>
  );
}
