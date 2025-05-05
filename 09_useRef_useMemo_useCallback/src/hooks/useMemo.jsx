import useFetch from "./useFetch"
import { useState, useMemo } from "react"

function UseMemo(){
    const [flag, setFlag] = useState(false)
    const {data, loading} = useFetch('https://dummyjson.com/products')
    const memorizedVersion = useMemo(() => filterProductByPrice(data?.products), [data])

    if(loading) return <h1> Loading Data! Please Wait </h1>

    function filterProductByPrice(getProducts){
        console.log("This function is getting rendered")
        return getProducts?.length > 0 ? getProducts.filter(singleProductItem=> singleProductItem.price>10) : []
    }

    return (
        <div>
            <h1 style={{color : flag ? "red" : "white"}}>UseMemo</h1>
            <button onClick={()=>setFlag(!flag)}>Flag</button>
            <ul>
                {
                    // filterProductByPrice(data?.products).map(item=> <li>{item.title}</li>)
                    memorizedVersion.map((item)=><li>{item.title}</li>)
                }
            </ul>
        </div>
    )
}


export default UseMemo