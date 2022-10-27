import Body from "./components/BodyFolder/Body";
import Form from "./components/Form/Form";
import Todo from "./components/Todo/TodoList"
import "./App.css";
import TodoList from "./components/Todo/TodoList";

function App() {
  return (
    <div className="App">
      <Body/>
      <TodoList/>

    </div>
  );
}

export default App;
