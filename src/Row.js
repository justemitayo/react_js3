import React from 'react'
import Cell from './Cell'

const Row = ({terms}) => {
  return (
    <tr>
      {Object.entries(terms).map(([key, value]) => {
        return(
          <Cell key={key} cellData={JSON.stringify(value)} />
        )
      })}  
    </tr>
  )
}

export default Row