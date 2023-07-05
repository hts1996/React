import PropTypes from "prop-types";
import styles from "./Button.module.css";
import App from "./App"

function Button({ text }) {
  return <button className={styles.title}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;