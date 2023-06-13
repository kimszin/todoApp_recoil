import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../recoil/todoList";

const styles = {
  ul: {
    listStyle: "none",
    padding: 0,
  },
};

export default function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul style={styles.ul}>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}%</li>
    </ul>
  );
}
