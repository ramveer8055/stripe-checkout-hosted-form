import "@stripe/stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout.jsx";
import Success from "./components/Success.jsx";
import Cancel from "./components/Cancel.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Checkout />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
