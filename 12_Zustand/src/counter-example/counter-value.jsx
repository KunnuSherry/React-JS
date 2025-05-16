import useCounter from "../store/use-counter";

function Counter(){

    const counter = useCounter(state=>state.count)
    console.log(counter) //Will give us count value

    return (
        <div>Counter Value is {counter}</div>
    );
}
export default Counter