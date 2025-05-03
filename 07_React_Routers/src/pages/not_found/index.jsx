import { Link } from "react-router-dom"

function NotFoundPage(){
    return(
        <div>
            <h3>This page doesn't exists</h3>
            <Link to={'/recipe-list'}>Recipe Page</Link>
        </div>
    )
}
export default NotFoundPage