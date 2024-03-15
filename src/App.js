import './App.css';
import Navbar from "./components/Header/Navbar";
import Header from "./components/Header/Header";
import Program from "./components/UI/Program";
import ChooseUs from "./components/UI/ChooseUs";
import Pricing from "./components/UI/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Program />
      <ChooseUs />
      <Pricing />
    </>
  );
}

export default App;
