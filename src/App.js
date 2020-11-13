// import logo from './logo.svg';
// import Form from "./Form";
// import Meme from "./Meme"
import NewToDoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Got things to do..</h1>
      <NewToDoForm/>
      <TodoList/>
      
      {/*<h1>Making Memes</h1>
       <Form/>
      <Meme/> */}
    </div>
  );
}

export default App;
