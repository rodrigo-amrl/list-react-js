import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className='addForm'>
            <label htmlFor="addItem">Add Item</label>
            <input type='text' value={newItem} onChange={(e) => setNewItem(e.target.value)} id='addItem' placeholder='Add Item' required autoFocus />

            <button type='submit' aria-label='Add  Item'>
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem