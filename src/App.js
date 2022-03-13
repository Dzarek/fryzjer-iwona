import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Prices from "./pages/Prices";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Prices />
      {/* <Reviews /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
