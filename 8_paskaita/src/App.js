import { Routes, Route } from "react-router-dom";
import NightModeProvider from "./contexts/NightModeProvider";
import PetsProvider from "./contexts/PetsProvider";
import Health from "./pages/Health/Health";
import Pets from "./pages/Pets/Pets";

const App = () => {
  // Susikurti dar viena context/provider su kalba.
  // LT/EN spaudziant keiciasi kalba
  return (
    <NightModeProvider>
      <PetsProvider>
        <Routes>
          <Route path="/" element={<Pets />} exact />
          <Route path="/health/:id" element={<Health />} />
        </Routes>
      </PetsProvider>
    </NightModeProvider>
  );
};

export default App;
