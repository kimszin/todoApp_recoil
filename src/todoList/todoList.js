import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../recoil/todoList";
import TodoItem from "./todoItem";
import TodoItemCreator from "./todoItemCreator";
import TodoListFilters from "./todoListFilters";
import TodoListStats from "./todoListStats";

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    border: "1px solid black",
    padding: "20px",
  },
};

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div style={styles.wrapper}>
      <div style={styles.content}>
        <TodoListStats />
        <TodoListFilters />
        <br />
        <TodoItemCreator />

        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </div>
    </div>
  );
}
