import PropTypes from 'prop-types';
export const Encabezado = ( {title,invoice} ) => {
    const {id,nombre}=invoice;
    return (
        <>
            <h1>{title}</h1>
            <ul className="list-group">
                    <li className="list-group-item">
                        ID {id}
                    </li>
                    <li className="list-group-item">
                        Nombre : {nombre}
                    </li>
                </ul>
        </>
    );
}

Encabezado.propTypes={
    title: PropTypes.string.isRequired,
    invoice: PropTypes.object.isRequired
}
