import React, {useState} from 'react'

const App = () => {
     let [coins, setCoins] = useState(0)
     
   //   function increment(t){
   //      if(coins <=9)
   //          setCoins(coins + t)
   //    }
   //   function decrement(t){
   //      if(coins >=2){
   //        setCoins(coins - t)
   //      }
   //   }
   //  function reset(){
   //      setCoins(0)
   //   }

    return (
        <div>
           <h1>You have {coins} coins</h1>
           <button onClick={()=>(coins<=9 ? setCoins(coins+1): "")}> Increment </button> 
           <button onClick={()=>(coins>=2 ? setCoins(coins-1): "")}> Decrement </button> 
           <button onClick={()=>setCoins(0)}> Reset </button>  

        </div>
    )
}
export default App