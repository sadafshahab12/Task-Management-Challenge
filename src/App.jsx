import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./register/Login";
import Signup from "./register/SignUp";
import Dashboard from "./pages/Dashboard";
import Todo from "./pages/Todo";
import { ToastContainer } from "react-toastify";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* public routes  */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          {/* protected route  */}
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
