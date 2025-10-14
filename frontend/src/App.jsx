import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Navigation from "./Componanets/Navigation";
import UpperBar from "./Componanets/UpperBar";
import HomePage from "./Pages/HomePage";
import { findWhichPage } from "./Functions/findPage";
import IncomplatePage from "./Pages/IncomplatePage";
import FormPage from "./Pages/FormPage";
import StoragePage from "./Pages/StoragePage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/Forms")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <>
      <div className="container block m-auto  h-screen ">
        <Routes>
          <UpperBar />
          <div className="pt-15 pb-10">
            <Route path="/" element={<HomePage />} />
            <Route path="/incomplete" element={<IncomplatePage />} />
            <Route path="/forms" element={<FormPage />} />
            <Route path="/Storage" element={<StoragePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </div>

          <Navigation />
        </Routes>
      </div>
    </>
  );
}

export default App;
