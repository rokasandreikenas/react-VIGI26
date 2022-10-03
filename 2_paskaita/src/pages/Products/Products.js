import { useState } from "react";
import "./Products.css";
import CustomButton from "../../components/CustomButton/CustomButton";

// Kai užkraunamas puslapis yra renderinami elementai
// Kai yra nustatomas setState betkuris, daromas rerenderis

const Products = () => {
  const [counter, setCounter] = useState(1);
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState("Rokas");
  const [surname, setSurname] = useState("Andreikenas");
  const [activeDay, setActiveDay] = useState("");

  const [todos, setTodos] = useState(["Išmokti React"]);
  const [todoText, setTodoText] = useState("");

  const [colors, setColors] = useState(["red"]);
  const [colorText, setColorText] = useState("");

  const [boxWidth, setBoxWidth] = useState(50);
  const [boxHeight, setBoxHeight] = useState(50);
  const [boxColor, setBoxColor] = useState("black");

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const transformSurname = () => {
    if (surname === "Andreikenas") {
      setSurname("Kazlauskas");
    } else {
      setSurname("Andreikenas");
    }
  };

  const handleAddColor = () => {
    if (colorText) {
      setColors((prevColors) => [...prevColors, colorText]); // prideda nauja spalva
      setColorText(""); // isvalo inputa
    }
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    // [...todos, todoText] => ["Išmokti React", todoText] => ["Išmokti React", "Eiti miegoti"]
    if (todoText) {
      setTodos([...todos, todoText]); // prideda naują todo
      setTodoText(""); // išvalo inputo textą
    }
  };

  const handleDeleteTodo = (todo) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo !== todo));
  };

  const handleIncreaseBoxSize = () => {
    setBoxWidth((prevBoxWidth) => prevBoxWidth + 25);
    setBoxHeight((prevBoxHeight) => prevBoxHeight + 25);

    if (boxColor === "black") {
      setBoxColor("grey");
    } else {
      setBoxColor("black");
    }
  };

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div>
      <button onClick={handleClick}>Products: {counter}</button>
      <br />
      <br />
      <button onClick={() => setQuantity(100)}>100</button>
      <button onClick={() => setQuantity(200)}>200</button>
      <button onClick={() => setQuantity(500)}>500</button>
      <h2>Kiekis {quantity}</h2>
      <br />
      <br />
      <h2 onClick={() => setName("Tomas")}>{name}</h2>
      <h2 onClick={transformSurname}>{surname}</h2>
      {weekdays.map((weekday) => (
        <span
          key={weekday}
          className={`weekday ${activeDay === weekday ? "active" : ""}`}
          onClick={() => setActiveDay(weekday)}
        >
          {weekday}
        </span>
      ))}

      <div className="todo-list">
        {todos.length}
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            className="todo-input"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <CustomButton variant="contained">Add todo</CustomButton>
        </form>
        <ul>
          {/* ISmokti programuoti_0   Eiti miegoti_1 */}
          {/*  */}
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <span onClick={() => handleDeleteTodo(todo)}> X</span>
            </li>
          ))}
        </ul>
        <br />
        <br />
        <input
          type="text"
          className="todo-input"
          value={colorText}
          onChange={(e) => setColorText(e.target.value)}
        />
        <CustomButton onClick={handleAddColor}>Add new color</CustomButton>
        {colors.map((color, index) => (
          <div
            key={`${color}_${index}`}
            style={{ backgroundColor: color, width: 50, height: 50 }}
          />
        ))}
        <br />
        <br />
        <button onClick={handleIncreaseBoxSize}>Increase box size</button>
        <div
          style={{
            backgroundColor: boxColor,
            width: boxWidth,
            height: boxHeight,
          }}
        />
        <br />
      </div>
    </div>
  );
};

export default Products;
