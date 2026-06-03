import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
/*import Events from "./components/Events"; */
import EventDetails from "./pages/EventDetails";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
         {/*<Route path="/events" element={<Events />} />*/}
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/pages/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;