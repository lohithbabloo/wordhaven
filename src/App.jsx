import { Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState("true");
  return (
    <Routes>
      <Route
        index
        element={
          <div className="max-w-[1000px] w-[90%] m-auto">
            <Navbar />
            <Main />
          </div>
        }
      />
      <Route
        path={"/login"}
        element={
          <div className="max-w-[500px] w-[90%] m-auto flex items-center justify-center h-screen ">
            <Login />
          </div>
        }
      />
      <Route
        path={"/register"}
        element={
          <div className="max-w-[500px] w-[90%] m-auto flex items-center justify-center h-screen ">
            <Register />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
