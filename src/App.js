import { Route, Routes } from "react-router-dom";
import Login from "./componets/Login"
import SignUp from "./componets/SignUp";


function App() {
  return (
    <div className="w-screen min-h-screen  scroll-smooth	relative  flex flex-col">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
