function Counter({countValue, onClick}){
    console.log("This is getting rendered")
    return(
        <div>
            <p>{countValue}</p>
            <button onClick={onClick}>Click</button>
        </div>
    )
}

export default Counter