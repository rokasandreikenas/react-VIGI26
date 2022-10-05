import Breathe from "../../components/Breathe/Breathe";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import Table from "../../components/Table/Table";

const Home = () => {
  const tableHeadings = ["Id", "Name", "Surname", "Email"];
  const tableData = [
    { id: 1, name: "Rokas", surname: "Andreikenas", email: "rokas@gmail.com" },
    { id: 2, name: "Tomas", surname: "Tomukas", email: "tomas@gmail.com" },
  ];

  const hanldRowClick = (row) => {
    console.log(row);
    // Detele functionality
  };

  return (
    <div>
      <Navbar />
      <h1>Welcome home</h1>
      <Table
        headings={tableHeadings}
        data={tableData}
        onRowClick={hanldRowClick}
      />
      <br />
      <Button>Home button</Button>
      <br />
      <Breathe />
    </div>
  );
};

export default Home;
