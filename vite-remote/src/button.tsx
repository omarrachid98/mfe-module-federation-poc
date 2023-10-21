import { useState } from 'react'
const Button = () => {
    const [countButtonClick, setButtonClick] = useState<number>(0);

    return (
        <button onClick={() => setButtonClick((count) => count + 1)}>
            count {countButtonClick}
        </button>
    )
}

export default Button;