import { useState} from "react";

export const Formulario =({items, handler})=>{

    const [formItems,setFormItems]=useState({items});
    

    const enviarFomulario=(form)=>{
        handler(formItems);
        setFormItems({
            producto:'',
            precio:0,
            cantidad:0
        });
        form.reset();
    }

    const handleChange=({target:{name,value}})=>{
        setFormItems({
            ...formItems,
            [name]:value
        })
    }
    
    return (
        <>
            <div className="container">
                <form onSubmit={event =>{
                    event.preventDefault();
                    enviarFomulario(document.querySelector('form'));
                }}>
                    <input name="producto" type="text" className="form-control m-3"  placeholder="Producto" onChange={handleChange}/>
                    <input name="precio" type="number" className="form-control m-3" placeholder="Precio" onChange={handleChange} />
                    <input name="cantidad" type="number" className="form-control m-3" placeholder="Cantidad" onChange={handleChange} />
                    <button type="submit" className="ms-3 btn btn-primary">Guardar</button>
                </form>
            </div>
        </>
    );
}
