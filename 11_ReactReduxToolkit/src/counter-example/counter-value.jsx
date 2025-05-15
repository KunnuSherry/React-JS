import { useSelector } from "react-redux"

function CounterValue() {

    const state = useSelector((state)=>state)
    console.log(state)
    const {countValue} = state

    return(
        <div>
            <h3>Counter Value is {countValue}</h3>
        </div>
    )
}

export default CounterValue