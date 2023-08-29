import React from "react";
import { useRecoilValue } from "recoil";
import TodoListStats from "./TodoListStats";
import TodoListFilters from "./TodoListFilters";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import "~@flaticon/flaticon-uicons/css/all/all";
import { filteredTodoListState } from "../recoil_state";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoListStats />
      <div style={{ display: "flex", gap: "10px" }}>
        <TodoItemCreator />
        <TodoListFilters />
      </div>
      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
      <i class="fi fi-ts-square-right"></i>
      <div className="fi fi-rr-square-right"> asdfasdfas</div>
    </>
  );
};

export default TodoList;
