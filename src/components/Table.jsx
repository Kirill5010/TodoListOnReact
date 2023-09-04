import React, { useState } from "react"
import { Column } from "./Сolumn"


export const Table = () => {
   let [countColumn, setCountColumn] = useState(['todo', 'progress', 'done'])
   return (
      <div>
         {countColumn.map((el) => <Column key={el} title={el}/>)}
      </div>
   )
}