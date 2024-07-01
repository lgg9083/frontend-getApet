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
import MyPets from "./pages/Pet/MyPets";
import AddPet from "./pages/Pet/AddPet";
import EditPet from "./pages/Pet/EditPet";

function App() {
  return (
    <Router>
      <UserProvider>
        <NavBar />
        <Message />
        <Container>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/pets/mypets" Component={MyPets} />
            <Route path="/Login" Component={Login} />
            <Route path="/pets/add" Component={AddPet} />
            <Route path="/Register" Component={Register} />
            <Route path="user/profile" Component={Profile} />
            <Route path="pets/edit/:id" Component={EditPet} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
