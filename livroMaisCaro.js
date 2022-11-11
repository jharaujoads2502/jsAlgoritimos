const livros = require('./listaLivros');

let maisCaro = 0;

for (let atual = 0; atual < livros.length ; atual ++){
    if ( livros[atual].preco > livros[maisCaro].preco){
        maisCaro = atual;
    }
}

console.log(`O livro mais barato custa ${livros[maisCaro].preco} e o título é ${livros[maisCaro].titulo}`);