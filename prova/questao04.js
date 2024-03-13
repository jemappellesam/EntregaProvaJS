objeto = {
    nome: 'nome',
    sobrenome: 'sobrenome',
    nomeCompleto: function(){
        return this.nome + this.sobrenome;
    }
}
console.log(objeto.nomeCompleto)
objeto = {
    nome: 'nome',
    sobrenome: 'sobrenome',
    nomeCompleto: ()=>{
        return this.nome + this.sobrenome;
    }
    
}
console.log(objeto.nomeCompleto)