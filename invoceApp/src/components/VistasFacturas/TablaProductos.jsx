import { ItemsView } from "./ItemsView";

export const TablaProductos = ({items}) => {
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => {
                       return  <ItemsView key={item.producto} item={item} />
                    })}
                </tbody>
            </table>
        </>
    );
}