import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="container">
      Rokas
      <div className="buttons">
        <Button text="Say hello" type="button" />
        <Button text="Click me" type="submit" />
        <Button text="Delete" bgColor="red" />
      </div>
      <Button text="Green button" bgColor="green" />
    </div>
  );
}

export default App;
