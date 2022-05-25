function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log('Fazendo Ligação');
        }

    }
}

function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log('Fazendo Ligação...');
    }
}

const celular = new Celular('LG', 6.5, 4500);
console.log(celular);