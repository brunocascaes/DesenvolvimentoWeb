let nota = 10;

if(nota > 7) {
    console.log('Aprovado');
} else if (nota > 3) {
    console.log('Exame');
} else {
    console.log('Reprovado');
}

switch (nota) {
    case 1:
        console.log('Péssimo');
        break;
    case 9: case 10:
        console.log('Perfeito');
        break;
    default:
        console.log('Inválido');
}