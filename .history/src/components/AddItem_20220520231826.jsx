import React from 'react'

export default function AddItem() {
    return (
        <form>
            <label htmlFor="inputText"> 
            <input id="inputText" type="text" />
            </label>
            <button >Add</button>
        </form>
    )
}
