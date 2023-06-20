import { React, useState } from 'react'

const AddTodo = (props) => {
    const [item, setItem] = useState("");

    const handleChange = (e) => {
        setItem(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.item(item)

    };

  return (
    <form action="post" className='mb-4 flex justify-between' onSubmit={handleSubmit}>
        <input type="text" className='w-[85%] p-2 border-b-[1px]  focus:outline-none' value={item} onChange={handleChange} placeholder='Enter Todo' name='item' />
        <button type='submit' className='flex justify-center bg-[#E1ECC8] text-black bg-transparent border-[1px] w-[13%] cursor-pointer rounded-md p-2 hover:border-black hover:bg-black hover:text-white text-center'>Add</button>
    </form>
  )
}

export default AddTodo