import React, { useContext, useState } from "react";
import { Table } from "./Table";
import { taskContext } from "../contexts/tasksContext";

export const Page = () => {
  const test = useContext(taskContext);
  const [context, setCountColumn] = useState(test)
  const countColumn = context.initialContext.countColumn

  return (
    <>
      <Table countColmn={countColumn} />
    </>
  );
};
