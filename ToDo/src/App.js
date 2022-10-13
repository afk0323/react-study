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
    <div class="todo-wrapper">

      <h1 class="todo-title">To Dos ({toDos.length})</h1>

      <div class="todo-box">
        <div class="todo-input-box">
          <form onSubmit={onSubmit}>
            <button class="complete-all-btn">✔</button>
            <input 
              class="todo-input"
              onChange={onChange}
              value={toDo}
              type="text" 
              placeholder="해야 할 일을 입력해주세요" 
            />
          </form>
        </div>

        <ul class="todo-list">
          {toDos.map((item, index) => (
            <li class="todo-item" key={index}>
              {item}
              <button class="deleteBtn" onClick={deleteBtn}> x </button>
            </li>

          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;
