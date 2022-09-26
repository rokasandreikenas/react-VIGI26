import "./App.css";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div className="container">
      Rokas
      <div className="buttons">
        <Button text="Say hello" type="button" />
        <Button text="Click me" type="submit" />
        <Button text="Delete" bgColor="red" />
      </div>
      <Button text="Green button" bgColor="green" />
      <Hero title="Info hero" subtitle="Info subtitle" color="green" />
      <Hero
        title="Info hero"
        subtitle="Info subtitle"
        color="blue"
        className="center"
      >
        {/* children */}
        <div>Rokas</div>
      </Hero>
      <Hero title="Info hero" subtitle="Info subtitle" color="red">
        <div className="center">
          <Button text="Green button" bgColor="green" />
        </div>
      </Hero>
      <div className="car-card-mini">
        <Card
          imageUrl="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png"
          text="Lamborghini"
        />
      </div>
      <div className="car-card-medium">
        <Card
          imageUrl="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png"
          text="Lambo"
        />
      </div>
      <Card
        imageUrl="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png"
        text="Lamborghini"
        className="car-card-mini"
      />
    </div>
  );
};

export default App;
