import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../recoil/atoms/todoState";
import { todoSortState } from "../recoil/selectors/todoSortState";

function TodoForm() {
  const [todos, setTodos] = useRecoilState(todoState); // useRecoilState: 읽기와 쓰기
  const sortList = useRecoilValue(todoSortState(work)); // useRecoilValue: 읽기


  useEffect(() => {
    axios
      .get("/data/data.json")
      .then((res) => {
        setTodos(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(todos)
  console.log(sortList)

return (
    <>
      {todos.map((v) => {
        return (
          <div style={{ marginBottom: ".5rem" }} key={v.id}>
            <span>{v.text}</span>
            <span style={{ marginLeft: "2rem", fontSize: ".8rem" }}>{v.state === true ? "완료" : "미완료"}</span>
          </div>
        );
      })}
    </>
  );
}

export default TodoForm;