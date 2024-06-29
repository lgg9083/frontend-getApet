import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import NavBar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Container from "./components/layouts/Container";
import UserProvider from "./context/UserContext";
import Message from "./components/layouts/Message";
import Profile from "./pages/User/profile";
function App() {
  return (
    <Router>
      <UserProvider>
        <NavBar />
        <Message />
        <Container>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/Login" Component={Login} />
            <Route path="/Register" Component={Register} />
            <Route path="user/profile" Component={Profile}/>
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
