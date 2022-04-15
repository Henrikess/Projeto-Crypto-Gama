var valorTabuada = 0;
valorTabuada = document.getElementById('valor').value;

function criarTabuada(){
    let divTabuada = document.getElementById("apresentar");
    let linhaTabuada = document.createElement('p');
    linhaTabuada.setAttribute('id',"tabuada");
    divTabuada.appendChild(linhaTabuada)
    
}


function gerarTabuada(){
    criarTabuada();
    var text='';
    const tabuada = [1,2,3,4,5,6,7,8,9,10];
    var resultado =0;
    let valorTabuada = document.getElementById("valor").value;
    if (valorTabuada == '' ){  
        alert("O valor inserido é inválido!")
        document.getElementById('valor').focus
    }else{
   
    for(let contador=0; contador<tabuada.length; contador++){
       
        resultado = valorTabuada*tabuada[contador];
        //alert(resultado);
        text += valorTabuada + " X " + tabuada[contador] + " = "+resultado+"<br>";
        document.getElementById('tabuada').innerHTML=text;

    }
    }
}