import { selectorFamily } from "recoil";
import { todoState } from "../atoms/todoState";

export const todoSortState = selectorFamily({
  key: "todoSortState",
  get: (work) => ({ get }) => {
    const data = get(todoState);
    const result = work ? data.filter((v) => v.state === true) : data.filter((v) => v.state === false)
    return result
  }
})