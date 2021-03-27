function tratarErroELancar(erro) {
    throw new Error('...'); //
    //throw 10;
}

function imprimirNomeGritado(obj) {
    try { //pode ter algum tipo de problema
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) { //caso aconteça o erro
        tratarErroELancar(e)
    } finally {
        console.log('final'); //é chamado de qualquer forma, após o try ou catch
    }
}

const obj = {nome: 'Roberto'};
imprimirNomeGritado(obj);