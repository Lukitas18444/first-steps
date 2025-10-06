import { useState } from "react";
import '../style.css'



export interface Props{
    name: string;
    quantity?: number;
}

export const ItemCount = ({name, quantity = 1}: Props) => {
  
  const [count, setCount] = useState(quantity);

  const handleAdd = () =>{
    setCount(count +1);
  }
  const handleSubtract= () => {
    setCount(count -1)
  }




  
  return (
    <div className="container">

        <span style={{
            width: 150,
            color: count === 1 ? 'red' : 'black'

        }
        }> {name} </span>
        <section>
          <button onClick={handleAdd} >+1</button>
          <span> {count}  </span>
          <button onClick={handleSubtract} > -1 </button>
        </section>
        
    
    
    </div>
  )
}


