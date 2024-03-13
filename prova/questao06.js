

aluno ={
    pessoa:{
        nome: "fulano",
        nascimento: "09/01/1997",
        cpf: "12345678911"
    },
    matricula: 001,
    notas: [10,10,09, 08]
}

function calcularMedia(objeto){
    let media = 0;
    for (let i = 0; i < objeto.notas.length; i++) {
        media += objeto.notas[i]
    }
    media = media/objeto.notas.length
    return media
}

console.log(calcularMedia(aluno))