import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationMenu from "./components/NavigationMenu";
import Property from "./screens/property";
import Producer from "./screens/producer";
import AnnualCulture from "./screens/annualCulture";
import PerennialCulture from "./screens/perennialCulture";
import GeneralAgriculture from "./screens/generalAgriculture";
import BeefCattle from "./screens/beefCattle";
import SignIn from "./screens/signIn";
import ProducerTable from "./screens/producerTable";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignIn />} />
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
