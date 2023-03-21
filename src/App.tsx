import "./App.css";
import Filters from "./components/Filters";
import Hotels from "./components/Hotels";
import { useHotels } from "./hooks/useHotels";
import { useRooms } from "./hooks/useRooms";

function App() {
  return (
    <div className="App">
      <Filters />
      <Hotels />
    </div>
  );
}

export default App;
