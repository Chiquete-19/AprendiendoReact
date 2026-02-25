export const ItemsView = ({item}) => {
    return (
        <>
            <tr id={item.producto}>
                <td>{item.producto}</td>
                <td>{item.cantidad}</td>
                <td>{item.precio}</td>
            </tr>
        </>
    )

}