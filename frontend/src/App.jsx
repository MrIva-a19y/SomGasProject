import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Navigation from "./Componanets/Navigation";
import UpperBar from "./Componanets/UpperBar";
import HomePage from "./Pages/HomePage";
import IncomplatePage from "./Pages/IncomplatePage";
import FormPage from "./Pages/FormPage";
import StoragePage from "./Pages/StoragePage";
import ProfilePage from "./Pages/ProfilePage";
import ProductionForm from "./Componanets/ProductionForm";

function App() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/Forms")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <div className="w-screen min-h-[100%] dark:bg-[#030712] dark:text-white">
      <div className="container dark block md:max-w-[90dvw]   md:relative md:min-h-screen md:h-[100dvh] m-auto  h-screen ">
        <UpperBar />
        <div className="pt-15 pb-10 md:pb-0  md:relative md:h-screen md:flex md:flex-row-reverse ">
          <div className="md:flex-1 max-h-[100%] md:max-w-[90%] h-[100%] dark:bg-[#030712] max-sm:pb-10 ">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/incomplete" element={<IncomplatePage />} />
              <Route path="/forms" element={<FormPage />} />
              <Route path="/Storage" element={<StoragePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/forms/production" element={<ProductionForm />} />
            </Routes>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default App;
