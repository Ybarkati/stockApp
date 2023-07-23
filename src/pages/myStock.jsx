import { Link } from "react-router-dom"
import { useStock } from "./components/ContextData"
export default function MyStock (){
    const {follow}=useStock()
    return (
        <div>
           {follow.map((element)=> element.name
           )}
        </div>
    )
}