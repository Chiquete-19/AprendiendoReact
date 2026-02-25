export const invoice ={
    id:1,
    nombre:`Factura #01`,
    cliente:{
        nombre:'Fernando',
        apellido:'Chiquete',
        direccion:{
            calle:'Calle',
            numero:1674,
            ciudad:'Culiacan',
            estado:'Sonora',
            pais:'Mejico',
        },
    },
    items:[
        {
            producto:'Tele',
            cantidad:2,
            precio:1000,
        },
        {
            producto:'celular',
            cantidad:2,
            precio:500,
        },
        {
            producto:'reloj',
            cantidad:3,
            precio:100,
        },
        {
            producto:'Caja',
            cantidad:3,
            precio:100,
        }
    ]

}