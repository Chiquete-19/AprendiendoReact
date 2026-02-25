import { invoice } from "../data/invoce"

export const getInvoice = () =>{

   
    return invoice;
}

export const CalcularTotal = (items) =>{
    return items.reduce((acum,item)=>acum+item.cantidad*item.precio,0);
}