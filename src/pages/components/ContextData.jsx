import { useContext,createContext } from "react";
import stocks from "./data";
import { useState } from "react";
const StockContext=createContext()
export function useStock(){
    return (
        useContext(StockContext)
    )
}

export default function StockProvider(props){
    const [follow,setFollow]=useState([])
    const [isFollow,setIsFollow]=useState({})
    function currentStock(symbol){
       const newData=stocks.filter((element)=>element.symbol==symbol)
        return newData[0]
    }
    const stockValue={
          stocks,
          follow,
          isFollow,
          currentStock,
          addToFollowing,
          deleteFromFollowing,
          
    }
    function addToFollowing(stock){
         setFollow((prevFollow)=>[...prevFollow,stock])
         setIsFollow((prev)=>({...prev,[stock.symbol]:true}))
    }
    function deleteFromFollowing(stock){
        const afterDelete=follow.filter(element=>element.name!=stock.name)
        setFollow(afterDelete)
        setIsFollow({...isFollow,[stock.symbol]:false})
   }

    return (
        <StockContext.Provider value={stockValue}>
              {props.children}
        </StockContext.Provider>
    )
}