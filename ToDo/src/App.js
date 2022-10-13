import {useState, useEffect} from "react";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault(); // 새로고침 막기

    if(toDo === ""){ return; }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  const deleteBtn = (event) => {
    const li = event.target.parentElement;
    li.remove();
  }

  return(
    <div className="todo-wrapper">

      <h1 className="todo-title">To Dos ({toDos.length})</h1>

      <div className="todo-box">
        <div className="todo-input-box">
          <form onSubmit={onSubmit}>
            <button className="complete-all-btn">✔</button>
            <input 
              className="todo-input"
              onChange={onChange}
              value={toDo}
              type="text" 
              placeholder="해야 할 일을 입력해주세요" 
            />
          </form>
        </div>

        <ul className="todo-list">
          {toDos.map((item, index) => (
            <li className="todo-item" key={index}>
              {item}
              <button className="deleteBtn" onClick={deleteBtn}> x </button>
            </li>

          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;
