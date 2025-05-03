import { useParams } from "react-router-dom"



function RecipeDetails(){
    const params = useParams()
    console.log(params)
    return(
        <h1>Recipe details of item {params.id}</h1>
    )
}

export default RecipeDetails