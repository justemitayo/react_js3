import React from 'react'

const ListItem = ({term}) => {
  return (
    <li>
        <p>{term.name}</p>       
        <p>{term.email}</p>       
        <p>{term.website}</p>       
    </li>
  )
}

export default ListItem
