import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import MyPage from "../../pages/myPage/MyPage";
function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/myPage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
