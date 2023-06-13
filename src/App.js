import { RecoilRoot } from "recoil";
import TodoList from "./todoList/todoList";

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
