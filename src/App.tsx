import "./App.css";
import { useHotels } from "./hooks/useHotels";
import { useRooms } from "./hooks/useRooms";

function App() {
  const { data, isError, isLoading } = useHotels();
  const { data: rooms } = useRooms("OBMNG1");

  return <div className="App"></div>;
}

export default App;
