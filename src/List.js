import React from 'react'
import ListItem from './ListItem'

const List = ({items}) => {
  return (
    <ul>
      {items.map((term, index) =>  (
          <ListItem 
          key ={term.id}
          term = {term}/>
      ))}
    </ul>
  )
}

export default List