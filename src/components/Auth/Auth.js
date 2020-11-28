import React from "react";
import PropTypes from "prop-types";
import styles from "./Auth.module.css";
// ПОЛУЧАЕМ ПРОПСЫ ОТ РОДИТЕЛЬСКОГО КОМПОНЕНТА
const Auth = ({ src, login, register }) => {
  console.log(src, login, register);
  return (
    <>
      <div className={styles.auth}>
        {/* <img src={src} alt="logo" width="240" /> */}
        <div className={styles.logoWrapper}></div>
        <p>{}</p>
        <button className={styles.loginBtn} type="button">
          {login}
        </button>
        <button className={styles.loginBtn} type="button">
          {register}
        </button>
      </div>
    </>
  );
};

// ЗНАЧЕНИЯ ПРОПСОВ ПО УМОЛЧАНИЮ, ЕСЛИ ИЗ РОДИТЕЛЯ ЕГО НЕ ПОЛУЧИЛИ
Auth.defaultProps = {
  src: "../../images/logo.png",
  login: "вход",
  register: "зарегистрироваться",
};

// ПРОСТАЯ ПЕРВИЧНАЯ ПРОВЕРКА ТИПА ДАННЫХ ПОЛУЧЕННОГО ПРОПСА
Auth.propTypes = {
  src: PropTypes.string,
  login: PropTypes.string,
  register: PropTypes.string,
};
export default Auth;
