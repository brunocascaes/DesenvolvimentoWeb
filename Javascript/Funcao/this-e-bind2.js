function Pessoa() {
    this.idade = 0;
    const self = this;

    //dispara uma outra funcao a partir de um determinado intervalo, passando uma outra funcao como parâmetro
    //setInterval recebe como parâmetros uma função e um intervalo (em ms). A cada 1000ms a função é disparada
    //setInterval tem um temporizador, que dispara
    setInterval(function () {
        /*this.idade++;*/
        self.idade++;
        /*console.log(this.idade);*/
        console.log(self.idade);
    }/*.bind(this)*/, 1000) 
}

new Pessoa