import { Routes, Route, useLocation } from "react-router-dom";
import { Contact, Home } from "./Pages"; 
import GetStarted from "./Pages/GetStarted.jsx";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="" element={<Home title="Juker - Home Page" />} />
        <Route path="contact" element={<Contact title="Juker - Contact Page" />} />
        <Route path="get-started" element={<GetStarted title="Juker - Get Started" />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
