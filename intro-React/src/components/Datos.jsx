export const Datos = () => {
    return (
        <>
            <div className="container">
                <h2>Datos productos</h2>
                <div className="col-10 content-center">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio Unitario</th>
                            </tr>
                        </thead>
                        <tbody id="CuerpoTabla">

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}