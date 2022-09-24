import React from "react";
import {AiOutLinePlus} from "react-icons/ai";

const style = {
  bg: `h-screen w-screen bg-gradient-to-r from-[#2F88ED] to-[#1CB5E0]`
}

function App() {
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form}>
          <input type="text" className={style.input} placeholder="Add a todo" />
          <button className={style.button}><AiOutLinePlus size={30} /> Add</button>
        </form>
        <ul>
          <li className={style.listItem}>Learn React</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
