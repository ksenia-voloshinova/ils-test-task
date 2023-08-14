import React from 'react';
import ListRoutes from "../components/listRoutes/ListRoutes";
import Map from "../components/Map/Map";
import "./App.scss";

export default function App() {

  return (
        <div className="App">
            <ListRoutes/>
            <Map/>
        </div>
  );
}
