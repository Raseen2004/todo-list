import React from 'react'

const TodoItem = (props) => {
  return (
    <div className='mb-3 flex justify-start'>
        <input type="checkbox" onChange={() => props.completed(props.id)} />
        <p className='ml-2'>{props.item}</p>
    </div>
  )
}

export default TodoItem;