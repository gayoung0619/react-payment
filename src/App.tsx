import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import CartPage from "./pages/cart.tsx";
import SuccessPage from "./pages/success.tsx";
import FailPage from "./pages/fail.tsx";

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<CartPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/fsil" element={<FailPage />} />
          </Routes>
        </Router>
      </>
  )
}

export default App
