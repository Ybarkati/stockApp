import { Link } from "react-router-dom"
export default function Nav (){
    return (
        <div className="navBar">
            <Link to="/"> 
                 Home 
            </Link> 
             
            <Link to="/about"> 
                About
            </Link>
            <Link to="/stock"> 
                 Dashboard   
            </Link>
            <Link to="/myStock"> 
                myStock
            </Link>
        </div>
    )
}