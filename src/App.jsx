import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Property from "./screens/property/property";
import Producer from "./screens/producer/producer";
import AnnualCulture from "./screens/annualCulture/annualCulture";
import PerennialCulture from "./screens/perenialCulture/perennialCulture";
import GeneralAgriculture from "./screens/generalAgriculture/generalAgriculture";
import BeefCattle from "./screens/beefCattle/beefCattle";
import SignIn from "./screens/signIn/signIn";
import ProducerTable from "./screens/producerTable/producerTable";
import Register from "./screens/register/register";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/cadastro-produtor" element={<Producer />} />
          <Route path="/grid-produtor" element={<ProducerTable />} />
          <Route path="/cadastro-propriedade" element={<Property />} />
          <Route path="/cultura-anual" element={<AnnualCulture />} />
          <Route path="/cultura-perene" element={<PerennialCulture />} />
          <Route path="/agricultura-geral" element={<GeneralAgriculture />} />
          <Route path="/pecuaria-de-corte" element={<BeefCattle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
