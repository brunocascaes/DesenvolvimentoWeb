const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao); //sem o this dá erro
    }
}

pessoa.falar();

const falar = pessoa.falar;
falar(); //conflito de paradigma: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();
