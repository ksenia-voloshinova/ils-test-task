import "./App.scss";
import ListRoutes from "./components/listRoutes/ListRoutes";
import Map from "./components/Map/Map";

export default function App() {
  return (
        <div className="App">
            <ListRoutes/>
            <Map/>
        </div>
  );
}
