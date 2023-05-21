import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailSideBar from "./pages/dashboard/components/EmailSideBar";
import Inbox from "./pages/dashboard/components/Inbox";
import InboxMail from "./pages/dashboard/components/InboxMail";

function AppRoute() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<EmailSideBar />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/inbox-mail" element={<InboxMail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoute;
