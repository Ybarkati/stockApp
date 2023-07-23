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
        <div>
          <p>{currStock.name}</p> 
          <button onClick={()=>handleClick()}>{isFollow[Name]? "UnFollow":"Follow"}</button>
        </div>

    )
}