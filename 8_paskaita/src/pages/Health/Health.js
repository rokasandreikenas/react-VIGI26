import NavigationBar from "../../components/NavigationBar";
import Topbar from "../../components/Topbar";
import Heading from "../../components/Heading";
import DefaultLayout from "../../layouts/DefaultLayout";
import { useContext } from "react";
import { PetsContext } from "../../contexts/PetsProvider";
import { useParams } from "react-router-dom";

// const mockedPetData = [
//   {
//     prescription: "Tick Vaccine",
//     description: "Alfa beta",
//     date: "2022-10-18",
//   },
//   {
//     prescription: "Wick Vaccine",
//     description: "Alfa beta",
//     date: "2022-12-18",
//   },
//   {
//     prescription: "Zick Vaccine",
//     description: "Alfa beta",
//     date: "2022-10-18",
//   },
//   {
//     prescription: "Tick Vaccine",
//     description: "Alfa beta",
//     date: "2022-10-05",
//   },
// ];

const Health = () => {
  const { pets } = useContext(PetsContext);
  const { id } = useParams();
  const pet = pets.find((pet) => pet.id === Number(id));

  return (
    <>
      <NavigationBar />
      <DefaultLayout>
        <Topbar>
          <Heading>{pet && pet.name}: Health records</Heading>
        </Topbar>
      </DefaultLayout>
    </>
  );
};

export default Health;
