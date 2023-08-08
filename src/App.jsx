import Main from "./components/main";
import Navbar from "./components/navbar";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState("true");
  return (
    <div className="max-w-[1000px] w-[90%] m-auto">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
