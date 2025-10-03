


export interface Props{
    name: string;
    quantity?: number;
}

export const ItemCount = ({name, quantity}: Props) => {
  return (
    <>

        <span style={{
            width: 150,

        }
        }> {name} </span>
        <button>+1</button>
        <span> {quantity}  </span>
        <button>-1</button>
    
    
    </>
  )
}


