import { useState } from "react"

export function Button() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    return (
       <button onClick={increment}>
            {count} 
        </button>
    )
}

