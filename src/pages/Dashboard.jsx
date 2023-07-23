import { Link } from "react-router-dom"
import { useStock } from "./components/ContextData"
export default function Dashboard (){
    const {stocks}=useStock()
    return (
        <div>
           {stocks.map((stock)=>
           <Link to={`/stock/${stock.symbol}`} key={stock.name}>
            {stock.name}
           </Link>
               
           )}
        </div>
    )
}