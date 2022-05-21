import React from 'react'

export default function AddItem() {
    return (
        <form>
            <div><label htmlFor="inputText"> Task
            <input id="inputText" type="text" />
            </label></div>
            <button >Add</button>
        </form>
    )
}
