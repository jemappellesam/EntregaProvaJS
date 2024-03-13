function demonstrarCallBack(funcao){
    funcao("Olá, mundo");
}

function callBack(ola){
  console.log(ola)
}

demonstrarCallBack(callBack)

