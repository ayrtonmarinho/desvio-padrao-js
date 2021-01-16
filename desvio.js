var sequencia = document.getElementById('sequencia');
var elementButton = document.querySelector("button.calc");
var result = document.getElementById('appDesvio');

elementButton.onclick = function(){
    const stringA = sequencia.value;
    console.log(sequencia.length);
    const arrayA = stringA.split(',');
    const arrayN = arrayA.map(Number);
    const m = media(arrayN);
    const desvioP = Math.sqrt(variancia(arrayN, m));
    console.log(desvioP);
    result.innerHTML = '';

    if(sequencia.value.length == 0){
        window.alert("Ops. Parece que você não digitou nada. Tente novamente.")
    }else{
        result.innerHTML += `<p><strong> O desvio padrão é:</strong><br><strong id="resp">${desvioP}</strong><p>`;
    }

}


function media(arrayNumeros){
   const tam = arrayNumeros.length;
   var soma = 0;
   for(var i = 0; i<tam; i++){
       soma += arrayNumeros[i];
   }
    return soma/tam;
}

function variancia(arrayNumeros, m){
    var soma2 = 0;
    const tam = arrayNumeros.length;
    for( var i=0; i<tam; i++){
        soma2 += Math.pow(arrayNumeros[i]-m,2);
    }
    return soma2/tam;
}

