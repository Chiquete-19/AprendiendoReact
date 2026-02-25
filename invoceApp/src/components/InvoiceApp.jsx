import { useEffect, useState } from "react";
import { CalcularTotal } from "../services/getInvoice"
import { getInvoice } from "../services/getInvoice"
import { Encabezado } from "./VistasFacturas/Encabezado";
import { TablaProductos } from "./VistasFacturas/TablaProductos";
import { Cliente } from "./VistasFacturas/Cliente";
import { Total } from "./VistasFacturas/Total";
import { Formulario } from "./VistasFacturas/Formulario";

const InvoiceInitial = {
    id: 0,
    nombre: ``,
    cliente: {
        nombre: '',
        apellido: '',
        direccion: {
            calle: '',
            numero: 0,
            ciudad: '',
            estado: '',
            pais: '',
        },
    },
    items: []
}

export const InvoiceApp = () => {
    const [invoice, setInvoice] = useState(InvoiceInitial);

    const [total, setTotal] = useState(0);

    const [items, setItems] = useState([]);

    useEffect(() => {
        setInvoice(getInvoice());
        setItems(getInvoice().items);
        setTotal(CalcularTotal(getInvoice().items));
        console.log(invoice);
    }, [invoice]);

    useEffect(() => {
        setTotal(CalcularTotal(items));
    }, [items])

    const { cliente } = invoice;
    const { direccion } = cliente;
    const handlerItems = ({producto,precio,cantidad})=>{
        setItems([...items,{
            producto:producto,
            precio:precio,
            cantidad:cantidad
        }]); 
    }
    return (
        <>
            <div className="container">
                <Encabezado title='Factura' invoice={invoice} />

                <Cliente direccion={direccion} cliente={cliente} />

                <h4>Productos</h4>
                <TablaProductos items={items} />
                <Total total={total} />
                <Formulario handler={(newItem)=>handlerItems(newItem)} />
            </div>
        </>
    )


}