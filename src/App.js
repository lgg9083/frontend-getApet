import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import NavBar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/Login" Component={Login}/>
        <Route path="/Register" Component={Register}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
