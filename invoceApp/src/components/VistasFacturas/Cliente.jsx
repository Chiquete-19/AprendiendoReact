export const Cliente = ({ cliente,direccion }) => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <h2>Datos de cliente</h2>
                    <ul>
                        <li>Nombre: {cliente.nombre}</li>
                        <li>Apellido: {cliente.apellido}</li>
                    </ul>
                </div>

                <div className="col">
                    <h4>Dirección</h4>
                    <ul>
                        <li>Calle : {direccion.calle} #{direccion.numero}</li>
                        <li>Ciudad : {direccion.ciudad} </li>
                        <li>Paid : {direccion.pais}</li>
                    </ul>
                </div>
            </div>
        </>
    )

}