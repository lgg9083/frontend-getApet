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
import PetDetails from "./pages/Pet/PetDetails";
import MyAdoptions from "./pages/Pet/MyAdoptions";
function App() {
  return (
    <Router>
      <UserProvider>
        <NavBar />
        <Message />
        <Container>
          <Routes>
            <Route path="/" element={Home} />
            <Route path="/pets/mypets" element={MyPets} />
            <Route path="/Login" element={Login} />
            <Route path="/pets/add" element={AddPet} />
            <Route path="/Register" element={Register} />
            <Route path="user/profile" element={Profile} />
            <Route path="pets/edit/:id" element={EditPet} />
            <Route path="pets/:id" element={PetDetails} />
            <Route path="pets/myadptions" element={MyAdoptions} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
