

export const Encabezado = () => {
    return (
        <>

            <div className="">
                <h1>Factura</h1>
            </div>
            <div className="container">
                <h2>
                    Datos principales
                </h2>
                <div className="row g-4">
                    <div className="form-group col-3">
                        <input className='form-control' type="text" id="nombre" placeholder="Nombre" />
                    </div>
                    <div className="col-3">
                        <input className='form-control' type="text" id="apellido" placeholder="Apellido" />
                    </div>
                    <br/><br />
                    <div className="col-3">
                        <input className='form-control' type="text" id="direccion" placeholder="Dirección" />
                    </div>
                    <div className="col-3">
                        <input className='form-control' type="number" id="telefono" placeholder="Telefono" />
                    </div>
                </div>
            </div>
        </>
    )
}