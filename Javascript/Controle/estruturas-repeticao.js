let valor = 0;

while (valor < 3) {
    console.log(valor);
    valor += 1;
}

valor = 0;

do {
    console.log(valor);
    valor += 1;
} while (valor < 3)

for (let i=0; i<3; i++) {
    console.log(`i=${i}`);
}

const notas = [1, 3, 4, 7, 10];
for (i in notas) {
    console.log(notas[i]);
}