

aluno ={
    pessoa:{
        nome: "fulano",
        nascimento: "09/01/1997",
        cpf: "12345678911"
    },
    matricula: 001,
    notas: [10,10,09, 08]
}

aluno2 ={
    pessoa:{
        nome: "ciclano",
        nascimento: "09/01/1997",
        cpf: "12345678911"
    },
    matricula: 001,
    notas: [09,08,09, 08]
}

aluno03 ={
    pessoa:{
        nome: "fulano",
        nascimento: "09/01/1997",
        cpf: "12345678911"
    },
    matricula: 001,
    notas: [06,10,09, 08]
}

aluno04 ={
    pessoa:{
        nome: "fulano",
        nascimento: "09/01/1997",
        cpf: "12345678911"
    },
    matricula: 001,
    notas: [5,10,09, 06]
}
aluno05 ={
    pessoa:{
        nome: "fulano",
        nascimento: "09/01/1997",
        cpf: "12345678911"
    },
    matricula: 001,
    notas: [5,7,09, 06]
}

function calcularMedia(objeto){
    let media = 0;
    for (let i = 0; i < objeto.notas.length; i++) {
        media += objeto.notas[i]
    }
    media = media/objeto.notas.length
    return media
}

alunos= [aluno, aluno2, aluno03, aluno04, aluno05]

function medias(alns){
    maiorMedia=0;
    menorMedia=0;
    mediaGeral =0;
    for (let index = 0; index < alns.length; index++) {
        media = calcularMedia(alns[index])
        mediaGeral += media
        if(media>maiorMedia) {
            maiorMedia = media;

        }
        if(media<menorMedia || menorMedia ==0){
           menorMedia = media
        }
    }

    resultados = {}
    mediaGeral = mediaGeral/alns.length
    resultados.maiorMedia = maiorMedia
    resultados.menorMedia = menorMedia
    resultados.mediaGeral = mediaGeral

    return resultados
}

console.log(medias(alunos))