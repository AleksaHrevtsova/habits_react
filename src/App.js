import "./App.css";
import Auth from "./components/Auth/Auth.js";

function App() {
  // ХРАНИМ В ПЕРЕМЕННЫХ ЗНАЧЕНИЯ ДЛЯ ПРОПСОВ
  let imgUrl = "./images/logo.svg";
  let login = "логинизация";
  let register = "регистрация";
  // let login;

  return (
    <>
      {/* <h1>HABITS</h1> */}
      
      {/* ПЕРЕДАЕМ ПРОПСЫ ВЛОЖЕННОМУ КОМПОНЕНТУ */}
      <Auth src={imgUrl} login={login} register={register} />
      {/* <Auth src="./images/logo.svg" login="вход" register="регистрация" /> */}
    </>
  );
}

export default App;
