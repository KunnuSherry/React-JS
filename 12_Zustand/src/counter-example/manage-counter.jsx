import useCounter from "../store/use-counter";

function ManageCounter(){

    const handleIncrementCount = useCounter((state)=>state.handleIncrementCount)

    return (
        <button 
        onClick={handleIncrementCount} 
        style={{margin:'12px', background:'black'}}>
            Increase Counter
        </button>
    );
}
export default ManageCounter