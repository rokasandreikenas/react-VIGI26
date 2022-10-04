import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const handleConfirm = () => {};

  return (
    <div>
      <Navbar />
      <h1>Welcome home</h1>

      <table>
        <tr>
          <td>1</td>
          <td>4 peopel</td>
          <td>12.99</td>
          <td>
            <span onClick={handleConfirm}>Confirm</span>
            <span>Delete</span>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Home;
