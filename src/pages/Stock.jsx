import { useParams } from "react-router-dom"
import { useStock } from "./components/ContextData"
export default function Stock (){
    const params =useParams()
    const {currentStock,addToFollowing,isFollow,deleteFromFollowing} = useStock()
    let currStock=currentStock(params.symbol)
    let Name=currStock.symbol
    function handleClick(){
        if (isFollow[Name]){
            deleteFromFollowing(currStock)
        } else{
            addToFollowing(currStock)
        }  
    }
    return (
        <div className="stockContainer">
            <div className="Stock">
               <h3><span>Company Name: </span> {currStock.name}</h3>
               <h3><span>last Price: </span> {currStock.lastPrice}</h3>
               <h3><span>Change: </span> {currStock.change}</h3>
               <h3><span>High: </span> {currStock.high}</h3>
               <h3><span>Low: </span> {currStock.low}</h3>
               <h3><span>Open: </span> {currStock.open}</h3>
            </div>
          <button onClick={()=>handleClick()}>{isFollow[Name]? "UnFollow":"Follow"}</button>
        </div>

    )
}