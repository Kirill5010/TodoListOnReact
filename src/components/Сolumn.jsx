import React, { useState, useContext } from "react";
import { taskContext } from "../contexts/tasksContext";
import { Card } from "./Card";

export const Column = ({ title }) => {
  const context = useContext(taskContext);
  const [task, setTasks] = useState(context);
  const taskArr = task.initialContext.tasksArr;

  return (
    <>
      <p>{title}</p>
      {taskArr.map((task) => {
        if (task.status === title) {
          return <Card key={task.id} task={task} />;
        }
      })}
    </>
  );
};
