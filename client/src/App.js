import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom";

// Routes
import NavBar from "./components/NavBar";
import ShelterPets from "./components/ShelterPets";
import CreatePet from "./components/CreatePet";
import ViewPet from "./components/ViewPet";
import EditPet from "./components/EditPet";

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ShelterPets/>} />
        <Route path="/pets/new" element={<CreatePet/>} />
        <Route path="/pets/:id" element={<ViewPet/>} />
        <Route path="/pets/edit/:id" element={<EditPet/>} />
      </Routes>
    </div>
  );
}

export default App;
