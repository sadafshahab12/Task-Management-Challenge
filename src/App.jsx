import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./register/Login";
import Signup from "./register/SignUp";
import Dashboard from "./pages/Dashboard";
import Todo from "./pages/Todo";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* public routes  */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
          {/* protected route  */}
          {/* <Route element={<Layout />}> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Todo />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
