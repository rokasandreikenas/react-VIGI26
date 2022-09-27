import "./CustomButton.css";

const CustomButton = ({ variant, children }) => {
  //   if (variant === "contained") {
  //     return <button className="custom-button contained">{children}</button>;
  //   } else {
  //     return <button className="custom-button outlined">{children}</button>;
  //   }
  const buttonType = variant === "contained" ? "contained" : "outlined";
  return <button className={`custom-button ${buttonType}`}>{children}</button>;
};

export default CustomButton;
