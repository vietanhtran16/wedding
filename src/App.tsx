import NavigationBar from "./components/NavigationBar";
import { Intro } from "./components/Intro";

function App() {
  return (
    <div className="min-h-screen bg-gray-400">
      <NavigationBar />
      <Intro />
    </div>
  );
}

export default App;
