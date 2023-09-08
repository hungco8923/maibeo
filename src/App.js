import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { ConfigProvider } from "antd";
import Mit from "./pages/Mit";
import Cun from "./pages/Cun";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            $colorPrimary: "#FFC7C7",
            borderRadius: 6,
          },
        }}
      >
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/mit" element={<Mit />} />
            <Route path="/cun" element={<Cun />} />
          </Routes>
        </div>
      </ConfigProvider>
    </>
  );
}

export default App;
