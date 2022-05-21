import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "pages/Main";
import Landing from "pages/Landing";
import OpenedLetters from "pages/OpenedLetters";
function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/main" element={<Main />} />
          <Route path="/letters" element={<OpenedLetters />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
