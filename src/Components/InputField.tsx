import React, { useRef } from 'react'
import './styles.css'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form
            className="input"
            onSubmit={(e) => {
                handleAdd(e);

            }}>
            <input
                type="text"
                placeholder="Enter a TODO"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="input__box"
                ref={inputRef}
            />
            <button type="submit" className="input_submit">Go</button>
        </form>
    )
}

export default InputField