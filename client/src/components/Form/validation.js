const regexURL=/https?:\/\/([a-zA-Z0-9]([^ @&%$\\\/()=?¿!.,:;]|\d)*[a-zA-Z0-9][\.])+[a-zA-Z]{2,4}([\.][a-zA-Z]{2})?\/?((?<=\/)(([^ @&$#\\\/()+=?¿!,:;'&quot;^´*%|]|\d)+[\/]?)*(#(?<=#)[^ @&$#\\\/()+=?¿!,:;'&quot;^´*%|]*)?(\?(?<=\?)([^ @&$#\\\/()+=?¿!,:;'&quot;^´*|]+[=][^ @&$#\\\/()+=?¿!,:;'&quot;^´*|]+(&(?<=&)[^ @&$#\\\/()+=?¿!,:;'&quot;^´*|]+[=][^ @&$#\\\/()+=?¿!,:;'&quot;^´*|]+)*))?)?/

export default function validation(inputs){
    let errors={};

    //Valida nombre:
    if(inputs.name.length>40){
        errors.name="el nombre del videogame debe ser de máximo 40 caracteres"
    };

    //Valida Descripción:
    if(inputs.description.length>240){
        errors.description="La descripción del videogame debe ser de máximo 240 caracteres"
    };

    //Validación de fechas:
    const dateNow = new Date(Date.now())
    const dateRelease = new Date(`${inputs.released}T00:00:00`)

    if(inputs.released!=="" && dateRelease>dateNow){
        errors.released="La fecha de lanzamiento no puede ser un valor futuro"
    };

    //Validación de Rating
    if(inputs.rating<0 || inputs.rating>5){
        errors.rating="El rating debe ser un número entre 0 y 5 (puede incluir decimales)"
    };

    //Valiación de Brackground_image (URL)
    if(inputs.background_image!=="" && !regexURL.test(inputs.background_image)){
        errors.background_image="Debe ingresar una URL válida ej:'http://www.miimagen.com/abcd'"
    };
    
    return errors;
}