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
        return "white-hero";
    }
  };
  // red-hero+center= red-herocenter
  // red-hero+ center= red-hero center
  // title = ""
  // title = undefined

  // su ifais
  if (!title && !subtitle) {
    return null;
  }

  return (
    <div className={`${heroClassName()} ${className}`}>
      {/* su ternary operatoriais ? : arba && */}
      {title && <h1>{title}</h1>}
      {subtitle && <h2>{subtitle}</h2>}
      {children && <div>{children}</div>}
    </div>
  );
};

export default Hero;
