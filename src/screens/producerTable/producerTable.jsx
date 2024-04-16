import React from "react";
import ProducerGrid from "../../components/ProducerGrid/ProducerGrid";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu.jsx";
import "../styles/screenStyles.css";
import "./producerTable.css";

const ProducerTable = () => {
  return (
    <div className="screen-body">
      <NavigationMenu />
      <div className="producer-grid-body">
        <ProducerGrid />
      </div>
    </div>
  );
};

export default ProducerTable;
