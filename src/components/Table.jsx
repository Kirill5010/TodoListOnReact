import React, { useContext } from "react"

import { Column } from "./Сolumn"


export const Table = ({countColmn}) => {
   return (
      <div>
         {countColmn.map((el) => <Column key={el} title={el}/>)}
      </div>
   )
}