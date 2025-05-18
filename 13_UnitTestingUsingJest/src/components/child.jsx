import { useState } from "react"

function Child({count}) {

    const [theme, setTheme] = useState(false)

    return(
        <div>
            <p data-testid='child-count-value'>{count}</p>
            <button onClick={()=>setTheme(!theme)} data-testid='toggle'>Toggle Theme</button>
            <p data-testid='toggle-text'>{(theme)?"True":"False"}</p>
        </div>
    )
}
export default Child