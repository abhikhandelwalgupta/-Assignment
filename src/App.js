import { Route, Routes } from "react-router-dom";
import Login from "./componets/Login"
import SignUp from "./componets/SignUp";
import PrivateRoute from "./componets/PrivateRoute";
import { Dashboard } from "./componets/Dashboard";
import Home from "./componets/Dashboard/Home";


function App() {
  return (
    <div className="w-screen min-h-screen  scroll-smooth	relative  flex flex-col">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute><Dashboard /></PrivateRoute>} >
        <Route path="/dashboard/home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
