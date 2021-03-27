const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir); //passa por cada índice
//chama a função para cada elemento/evento

fabricantes.forEach(fabricante => console.log(fabricante));