import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login"
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
import ResetPassword2 from "./components/ResetPassword2";
function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/resetpassword2" element={<ResetPassword2 />} />
      </Routes>
  </Router>
  );
}

export default App;
