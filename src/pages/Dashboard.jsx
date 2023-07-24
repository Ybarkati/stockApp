import { Link } from "react-router-dom"
import { useStock } from "./components/ContextData"
export default function Dashboard (){
    const {stocks}=useStock()
    return (
        <div className="tableContainer">
        <div className="table">

           {stocks.map((stock)=>
           
           <div className="oneElement" key={stock.name}>
           <Link to={`/stock/${stock.symbol}`} key={stock.name}>
            <div className="Name">
               {stock.name}
            </div>
            <div className="Price">
                {stock.lastPrice}
            </div>
            <div className="Change" style={{color:((stock.change).toString()[0]=="-")? "red":"green"}}>
                 {stock.change}
            </div>
            
           </Link>
           </div>
           
               
           )}
           </div>
        </div>
    )
}