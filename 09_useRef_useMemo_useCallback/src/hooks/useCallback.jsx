import Counter from "./counter"
import { useCallback, useState } from "react"
function UseCallback(){

    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const memorizeSetCountOneFunc = useCallback(()=>setCountOne(countOne+1), [countOne])
    const memorizeSetCountTwoFunc = useCallback(()=>setCountTwo(countTwo+1), [countTwo])

    return (
        <div>
            <h1>
                Use CallBack
                <Counter countValue={countOne} onClick={memorizeSetCountOneFunc} />
                <Counter countValue={countTwo} onClick={memorizeSetCountTwoFunc} />
            </h1>
        </div>
    )
}

export default UseCallback