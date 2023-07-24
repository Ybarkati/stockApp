import { Link } from "react-router-dom"
import { useStock } from "./components/ContextData"
export default function MyStock (){
    const {follow}=useStock()
    return (
        <div className="Follow">
           {follow.map((element)=> 
           (<div className="Stock">
           <h3><span>Company Name: </span> {element.name}</h3>
           <h3><span>last Price: </span> {element.lastPrice}</h3>
           <h3><span>Change: </span> {element.change}</h3>
           <h3><span>High: </span> {element.high}</h3>
           <h3><span>Low: </span> {element.low}</h3>
           <h3><span>Open: </span> {element.open}</h3>
            </div>)
           )}
        </div>
    )
}