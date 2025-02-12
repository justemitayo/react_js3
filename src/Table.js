import React from 'react'
import Row from './Row'

const Table = ({items}) => {
  return (
    <div className='table-container'>
        <table>
            <tbody>
                {items.map(terms => (
                    <Row key ={terms.id} terms={terms} />
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default Table