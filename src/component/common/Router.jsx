import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "pages/Main";
import Landing from "pages/Landing";
import MessageFeed from "pages/MessageFeed";
function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/main" element={<Main />} />
          <Route path="/letters" element={<MessageFeed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
