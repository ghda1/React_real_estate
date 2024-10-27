import { useContext } from "react";

import Properties from "../components/Property/Properties";
import { PropertiesContext } from "../Contexts/PropertiesContext";

function Home() {
  const { properties } = useContext(PropertiesContext);

  return (
    <div>
      {properties.length > 0 ? (
        <Properties />
      ) : (
        <h2>There is no properties.</h2>
      )}
    </div>
  );
}

export default Home;
