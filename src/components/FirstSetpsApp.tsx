import { ItemCount } from "./shopping-cart/ItemCount";
import './style.css'

interface ItemInCart{
    productName: string;
    quantity ?: number
}

const ItemInCart: ItemInCart[] = [
    {productName: 'Nintendo Switch', quantity: 1},
    {productName: 'Pro Controller', quantity : 5},
    {productName: 'Super Smash', quantity : 10}

]


export function FirstStepsApp(){
    return(
    <>
        <h1>Carrito de compras</h1>
      {/*   <ItemCount name="Ninento Switch 2" quantity = {1} />
        <ItemCount name="Pro Controller" quantity = {1} />
        <ItemCount name="Super Smash" quantity = {2}/> */}

        {
            ItemInCart.map( ({productName, quantity}) => (
                <ItemCount key = {productName} name= {productName} quantity = {quantity}></ItemCount>
            ) )
        }
    
    

    </>
    )
}