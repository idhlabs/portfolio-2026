import Navbar from "./components/Navbar/Navbar";
import IconsDesktop from "./components/IconsDesktop/IconsDesktop";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <IconsDesktop />
    </div>
  );
};

export default App;
