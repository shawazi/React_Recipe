import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Details from "./pages/details/Details";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import { useAuthContext } from "./context/AuthContext";


const App = () => {
  
  const {isLoggedIn} = useAuthContext();

  const renderProtectedRoute = (element: JSX.Element) => {
    return isLoggedIn ? element : <Navigate to="/login" />;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={renderProtectedRoute(<Details />)} />        
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App