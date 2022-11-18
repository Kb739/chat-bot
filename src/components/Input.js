import React, { useState } from "react"
export default function Input() {
    const [buffer, setBuffer] = useState([])
    const [msg, setMsg] = useState('')

    const bufferElements = buffer.map(text => <li>{text}</li>)

    function handleChange(e) {
        setMsg(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        setBuffer(prevBuffer => [...prevBuffer, msg])
        setMsg('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    input
                    <input value={msg} onChange={handleChange} />
                </label>
            </form>
            <ul style={{ listStyle: "none" }}>
                {bufferElements}
            </ul>
        </>
    )
}