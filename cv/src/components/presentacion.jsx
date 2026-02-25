import presentacion from '../assets/Gemini_Generated_Image_qvn6xbqvn6xbqvn6.png'

export const Presentacion = () => {
    let texto=`Hola me presento, soy un desarrollador web con experiencia en React, Node.js y MongoDB. Me apasiona crear aplicaciones web modernas y eficientes. Estoy buscando oportunidades para seguir creciendo como desarrollador y contribuir a proyectos interesantes.`
    return (
        <>
            <div className="container" id="presentacion">
                <div className="row">
                    <span className='col'>
                        {texto}`
                    </span>
                    <span className='col'>
                        <img className=' mx-auto img-fluid' src={presentacion} alt="" />
                    </span>
                </div>
            </div>
        </>
    );
}