const logica = (base)=> {

    let resultado = '';

    resultado+= '=================\n';
    resultado += `tabla del ${base}\n`;
    resultado += '=================\n';

    for (let i = 1;i <= 10; i++){
        
        resultado += `${base} * ${i} = ${base * i}\n`;
    }

    return resultado;

}

module.exports = {logica};

