import { useEffect, useRef } from "react";


function Hooks(){
     const countValue = useRef(0)
     const divElementRef = useRef()
     const inputRefElement = useRef()

     function handleClick(){
        countValue.current++;
        console.log(countValue.current);
     }
     useEffect(()=>{
        const getDivRefrence = divElementRef.current;
        const getInputElement = inputRefElement.current;
        getInputElement.focus();
        console.log(getDivRefrence)

        setTimeout(()=>{
            getDivRefrence.style.color = 'green';
        },2000)
     })
    return(
        <div>
            <h1>useRef, useCallback, useMemo</h1>
            <button onClick={handleClick}>Click Me</button>
            <div ref={divElementRef}>Some Random Text</div>
            <input type="text" name="name" placeholder="Enter Your Name" ref={inputRefElement}/>
        </div>
    )
}

export default Hooks