import "./Hero.css";

const Hero = ({ title, subtitle, color, className, children }) => {
  const heroClassName = () => {
    switch (color) {
      case "red":
        return "red-hero";
      case "blue":
        return "blue-hero";
      case "green":
        return "green-hero";
      default:
        return "";
    }
  };
  // red-hero+center= red-herocenter
  // red-hero+ center= red-hero center
  console.log(title);
  return (
    <div className={`${heroClassName()} ${className}`}>
      {/* Jeigu title nera, nesukurk h1 */}
      <h1>{title}</h1>
      {/* Jeigu subtitle nera, nesukurk h2 */}
      <h2>{subtitle}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Hero;
