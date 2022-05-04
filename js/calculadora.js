function AcenderBotãoN(str){
    //Responsável pelo efeito visual de acender os botões pressionados. Utilizei o setTimeout para modificar o id dos botões em um intervalo definido.
    if(str == 'o.'){str = 'Ponto'}
    if(str == 'oreset'){str = 'Reset'}
    console.log('A str :', str)
    if(str == 'o+' || str == 'o-' || str == 'o*' || str == 'o/' || str == 'o%' ){
        let btn = ('btn'+str);
        document.getElementById((btn)).id = 'btnFunc2';
        setTimeout(() => {
            console.log("Delayed for 1 second.");
            document.getElementById(('btnFunc2')).id = btn;
        }, 125)
    }
    else if(str == 'odel'){ 
        let btn = ('btn'+str);
        document.getElementById((btn)).id = 'btnodel2';
        setTimeout(() => {
        console.log("Delayed for 1 second.");
        btn = document.getElementById(('btnodel2')).id = btn;
    }, 125)}
    else if(str == 'Reset'){ let btn = ('btn'+str);
        document.getElementById((btn)).id = 'btnReset2';
        console.log(btn)
        setTimeout(() => {
            console.log("Delayed for 1 second.");
            btn = document.getElementById(('btnReset2')).id = btn;
        }, 125)}
    else{
        let btn = ('btn'+str);
        document.getElementById((btn)).id = 'btnCalc2';
        console.log(btn)
        setTimeout(() => {
            console.log("Delayed for 1 second.");
            btn = document.getElementById(('btnCalc2')).id = btn;
        }, 125)
    }

}
function Calcular(display2,display3,valor) { // Função de cálculo. Concatena as informações entre os campos (Display´s), e realiza o calculo através da função eval.
    if(display2 == ''){// Caso o display2 esteja vazio, é considerado como 'zero'.
        document.getElementById('display1').innerHTML = '0';
        display2 = '0';
        document.getElementById('display3').innerHTML ='=';
       // return;
    }
    const str = valor;
    let sub = str.substr(0,1);
    let calculo ='';
    console.log('Valor do sub', sub)
    if(sub != display3){calculo = display2 + display3 + valor;// Impede a concatenação de operadores diferentes na string calculo (ex: 5*-3)
    }
    else{ 
        calculo = display2 + valor;
    }
    //console.log('display2',  display2);
    //console.log('calculo',  calculo);
    if(calculo){//Verifica se existe conteudo no display2  
        //console.log('Calculo capturado:', contDisplay2);
        let resultado = eval(calculo);
        resultado = resultado.toString();
      //  resultado.length > 13 ? input função erroC
        if(resultado == NaN){return '0';}
        else{
            resultado = parseFloat(resultado);
            //console.log('Resultado do calculo:', resultado);
            resultado = parseFloat(resultado.toFixed(6));
            if(resultado == 'Infinity'){
                resultado = 'Infinito!';
                setTimeout(() => {
                    Reset();
                    return;
                }, 3000)
            }// Retorna infinito no caso de infinity / pt-br 
            if(sub != display3){document.getElementById('display2').textContent = display2 + display3 + valor1 + '='+ resultado;
            }else{
                document.getElementById('display2').textContent = display2 + valor + '='+ resultado;
            }
            return resultado;
            }                  
    
    }else{
        document.getElementById('display1').innerHTML = '0';
    }


}
function CheckClean(){
    //Transforma o conteúdo do display1 em 0
    document.getElementById('display1').textContent = '0';  
}
function ZeroClean (text){
    //Regra para adição de zeros e pontos, impede que o elemento seja inserido sem necessidade.
    let contDisplay1= document.getElementById('display1').textContent;
    const str = contDisplay1
    const str2 = str.charAt(str.length -1);
    //console.log("O ultimo char do display1 é:", str2);
    //console.log("A string recebida na função é:", text);
    
    if(str2 == '.' & text == '.'){//Evita a inclusão de um segundo ponto
        
        Del();
    }
    
    if(contDisplay1.includes('0.') ){//Evita um erro na aplicação. (O texto zero pode receber ponto para operações com valores reais.)
        //console.log('O display1 contem:',contDisplay1)
        return;
     }
    else if( Number(contDisplay1) == 0 & contDisplay1 != '0.'){//Caso o display1 contenha apenas zero e seja diferente de de 0. (esperando a operação float)
        if(text == '.'){//Confirmando que o texto é um ponto, retornamos sem impedir a inclusão do zero.
            return;
        }else{
            //console.log('Tem um zero', contDisplay1);
            document.getElementById('display1').textContent = '';
        }
        
    }
    if(document.getElementById('display3').textContent == '='){//Caso a operação do display3 identifique que o display2 mostre um resultado anterior, reseta para um novo cálculo.
        document.getElementById('display1').textContent='0'
        document.getElementById('display2').textContent='' 
    }
 }
function InserirNum(str){//Adiciona o texto de acordo com a incerção númerica identificada
    console.log(str)
    function Concatenar(str){//Concatena os caracteres.
        display1Text =  document.getElementById('display1').innerHTML;
        document.getElementById('display1').innerHTML = display1Text + str;
    }
    let display1 = document.getElementById('display1').innerHTML;
    let display2 = document.getElementById('display2').innerHTML;
    let display3 = document.getElementById('display3').innerHTML;
    if(display3 == '='){//Caso o display1 seja o resultado de uma operação anterior
        document.getElementById('display1').innerHTML = str;
        document.getElementById('display2').innerHTML = '';
        document.getElementById('display3').textContent='⠀'  
        return; 
    }
    if(display1 == '0.'){
        Concatenar(str); 
        //
        return; }
    console.log('tem isso no display1:', display1);
    if((display1 == '' || display1 == NaN|| display1 == '0' || display3 == '=') & str == '.'){//Caso o ponto seja o primeiro char inserido, é inserido no campo '0.'
        display1 = '0.';
        document.getElementById('display1').innerHTML = display1;
        return;
    }
    if(display1.includes('.') & str == '.'){//Verifia se o display1 já possui um ponto.
        console.log('O display1 contem:',display1 ,'JÁ EXISTE UM PONTO!')
        return;
     }
    if(display1.length > 12){return;}//Verifica se o tamanho da string presente do display1 é menor que 12 (Valor max de incerção).
    console.log('Display3/ Display2', display3, display2);
    if(display3 = '-' & Number(display2) < 1){
        document.getElementById('display1').innerHTML = '-'+str;
        document.getElementById('display2').innerHTML = '';
        return;
    }
    else{
    //console.log('display3:',display3);
        Concatenar(str);
    }
}
function InserirCalculo(str, op){//Insere as operações e prepara a string no display2 para a função Calcular.
    let display1 = document.getElementById('display1').innerHTML;
    let display2 = document.getElementById('display2').innerHTML;
    let display3 = document.getElementById('display3').innerHTML;
    sub1 = display1.substr(0,1);//Analisa o primeiro char do display1
    sub2 = display2.substr(display2.length,1)//Analisa o ultimo char do display2
    if(display1 == '-' || display1 == '+'){//Caso o display1 só possua um destes operadores, é apenas substituido e a inserção do cálculo não é realizada (return)
        document.getElementById('display3').innerHTML = op;
        document.getElementById('display1').innerHTML = op;
        return;
    }   
     
    if(display3 == '='){//Verifica se o conteudo do display1 é o resultado de uma operação anterior
        //console.log('Display 3 é = ', display3);
        console.log("Valor display3",display3 )
        document.getElementById('display2').innerHTML = display1;
        document.getElementById('display1').innerHTML = op;
        //console.log('Display 1 é = ', display1);
        document.getElementById('display3').textContent = op;
        return;
    }
    if(display2 == ''){//Caso o Display1 esteja vazio, recebera o contéudo do display1.
        document.getElementById('display2').innerHTML = display1;
        document.getElementById('display1').innerHTML = '0';
        document.getElementById('display3').innerHTML = op;
        return;

    }
    concText = op + str;//Texto concatenado da string recebida + a operção selecionada pela incerssão    
    document.getElementById('display2').innerHTML = display2 + concText;
    document.getElementById('display3').textContent = op;
}
function Numbers(n){//Função de incerssão de números
        AcenderBotãoN(n)
        switch(n){
            case  'n1':
                ZeroClean();
                text ='1'
                InserirNum(text);
                break;
                // tecla 1

            case 'n2':
                ZeroClean()
                text ='2'
                InserirNum(text);
                break;
            // tecla 2

            case 'n3':
                ZeroClean();
                text ='3'
                InserirNum(text);
                break;
            // tecla 3

            case 'n4':
                ZeroClean();
                text ='4'
                InserirNum(text);
                break;
            // tecla 4

            case 'n5':
                ZeroClean();
                text ='5'
                InserirNum(text);
                break;
            // tecla 5

            case 'n6':
                ZeroClean();
                text ='6'
                InserirNum(text);
                break;
            // tecla 6

            case 'n7':
                ZeroClean();
                text ='7'
                InserirNum(text);
                break;
            // tecla 7

            case 'n8':
                ZeroClean();
                text ='8'
                InserirNum(text);
                break;
            // tecla 8

            case 'n9':
                ZeroClean(); 
                text ='9'
                InserirNum(text);
                break;
            // tecla 9

            case 'n0':
                ZeroClean()
                text ='0'
                InserirNum(text);
               /* console.log("0", document.getElementById("display1"));
                //criando novo texto para ser inserido
                text = "0";
                //Preparando texto anterior para concatenar.
                cText = document.getElementById("display2").textContent;
                // Atribuindo texto concatenado ao campo
                document.getElementById("display2").textContent = cText + text;
                //Fazendo a mesama coisa para o outro display
                nText = document.getElementById("display1").textContent;
                document.getElementById("display1").textContent = nText + text;
                text = "";  */
                break;

                // tecla 0
            case 'o.':
                text ='.'
                ZeroClean(text); 
                InserirNum(text);
                break;
                    
                // tecla , . ,numpad
    }
}
function Funcoes(f){//Operadores e funções da calculadora
    AcenderBotãoN(f)//Chama a função para acender o botão de acordo.
    switch(f){

            case 'o*':
                console.log('*');
                op = '*';
                //Capturando o primeiro produto para a operação
                valor1 = parseFloat(document.getElementById('display1').textContent);
                if(valor1 == 0){
                    document.getElementById('display3').innerHTML = op;
                    break;
                }
                InserirCalculo(valor1, op)
                CheckClean()
                break;
            // tecla */*numpad

            case 'o-':
                console.log('-');
                op = '-';
                valor1 = parseFloat(document.getElementById('display1').textContent);
                if(valor1 == 0){
                    document.getElementById('display1').innerHTML = op;
                    document.getElementById('display3').innerHTML = op;
                    break;
                }
                if(document.getElementById('display1').innerHTML == op || document.getElementById('display1').innerHTML == '+'){
                    if(document.getElementById('display1').innerHTML == '+'){
                        document.getElementById('display1').innerHTML = op;
                        document.getElementById('display3').innerHTML = op;
                        break;
                    }
                    break;
                }
                InserirCalculo(valor1, op)
                CheckClean()
                break;
            // tecla -/-numpad

            case 'o+':
                console.log('+');
                op = '+';
                valor1 = parseFloat(document.getElementById('display1').textContent);
                if(valor1 == 0){
                    document.getElementById('display1').innerHTML = op;
                    document.getElementById('display3').innerHTML = op;
                    break;
                }
                if(document.getElementById('display1').innerHTML == op || document.getElementById('display1').innerHTML == '-'){
                    if(document.getElementById('display1').innerHTML == '-'){
                        document.getElementById('display1').innerHTML = op;
                        document.getElementById('display3').innerHTML = op;
                        break;
                    }
                    break;
                }
                InserirCalculo(valor1, op)
                CheckClean()
                break;
            // tecla +/+numpad

            case 'o/':
                console.log('/');
                op = '/';
                valor1 = parseFloat(document.getElementById('display1').textContent);
                if(valor1 == 0){
                    document.getElementById('display3').innerHTML = op;
                    break;
                }
                InserirCalculo(valor1, op)
                CheckClean()
                break;
            // tecla / ou /numpad

            case 'o%':
                console.log('%');
                op = '%';
                valor1 = parseFloat(document.getElementById('display1').textContent);
                if(valor1 == 0){
                    document.getElementById('display3').innerHTML = op;
                    break;
                }
                InserirCalculo(valor1, op)
                CheckClean()
                break;
                // tecla / ou /numpad

            case 'odel':
                console.log('Tecla Del pressionada');
                Del();
                // tecla del, <- , backspace 
                break;

            case 'o=':
                let display3 = document.getElementById('display3').innerHTML;
                if(display3 == '='){break;}// Não realiza o cálculo, no caso do conteúdo do display1 ser um resultado.
                //implementar impressao do historico{  
                valor1 = document.getElementById('display1').textContent;
                let display2 = document.getElementById('display2').innerHTML;
                InserirCalculo(valor1,'');
                console.log('display2 enviado pelo =', display2);
                document.getElementById('display1').textContent = Calcular(display2,display3,valor1);
                text = '=';
                //document.getElementById('display2').textContent = display2 + display3 + valor1 + '='+ document.getElementById('display1').textContent;
                document.getElementById('display3').textContent = text;
    

                break;
            // tecla Enter, =

            case 'oreset':
                console.log('reset');
                Reset();
                //location.reload();
                break;
            // tecla esc

    }
}
function Reset(){//Reseta a aplicação para o estado original
    document.getElementById('display1').textContent='0'
    document.getElementById('display2').textContent='' 
    document.getElementById('display3').textContent='⠀'
   
}
function Del(){//Deleta o ultimo elemento inserido.
    const display3 = document.getElementById('display3').innerHTML;
    const display1 = document.getElementById('display1').innerHTML;
    
    if(display3 == '='){//Caso identificado que o valor do display1 é um resultade de operação anterior, reseta ao invés de deletar.
        console.log('Display 1 contem:', display1);
        Reset();
        return;
    }
    else if(display1.length <1 || display1 == '' || display1 == '0' ){//Case seja o ultimo elemento da string, é inserido um zero no display1 (Evita valores indefinidos,NaN no cálculo)
        document.getElementById('display1').innerHTML = '0'; 
        return;
    }
    else{
        const str = document.getElementById('display1').innerHTML;  
        console.log('Numero no display1: ', str);
        const str2 = str.substr(0, str.length - 1);// subdividindo a string um array e removendo o ultimo elemento -> de 0 ao tamanho da string -1
        console.log('Numero após del',str2);
        document.getElementById('display1').textContent = str2;
        //verificando se o ultimo caractere do diplay é um numero
       
        console.log(document.getElementById("display1").innerHTML)
     
    }if(Number.isNaN(document.getElementById('display1').innerHTML)){//Nova verificação de valor no display1, caso não exista é inserido um zero
        console.log('Display1 não tem um número',Number.isNaN(document.getElementById('display1').innerHTML))
        document.getElementById('display1').innerHTML = '0';
    }console.log('Display1:', display1)
    if(display1 == '' || display1 == NaN){document.getElementById('display1').innerHTML = '0'}
}
function Screen() {//Função principal da calculadora. Responsável por indentificar as incerssões e chamar as funções correspondentes.
    
    document.getElementById('display1').textContent = '0';
    valor1 ='' ;
    display1 = document.getElementById('display1').innerHTML;
    display2 = document.getElementById('display2').innerHTML;
    display3 = document.getElementById('display3').innerHTML;
    resultado = 0;
    op ='';

    let tela = document.querySelector('body')
    document.querySelector('body').addEventListener('keydown', function (event) {

        var tecla = event.keyCode;

        // let text = ''
        // usado para rastrear as teclas utilizadas na calculadora: 
        console.log("Tecla:", tecla, "pressionada")
        //mapeando teclas
        if(tecla == 97 || tecla == 49){tecla = 'n1';Numbers(tecla);}
        if(tecla == 98 || tecla == 50){tecla = 'n2';Numbers(tecla);}
        if(tecla == 99 || tecla == 51){tecla = 'n3';Numbers(tecla);}
        if(tecla == 100 || tecla == 52){tecla = 'n4';Numbers(tecla);}
        if(tecla == 101 || tecla == 53){tecla = 'n5';Numbers(tecla);}
        if(tecla == 102 || tecla == 54){tecla = 'n6';Numbers(tecla);}
        if(tecla == 103|| tecla == 55){tecla = 'n7';Numbers(tecla);}
        if(tecla == 104|| tecla == 56){tecla = 'n8';Numbers(tecla);}
        if(tecla == 105|| tecla == 57){tecla = 'n9';Numbers(tecla);}
        if(tecla == 96|| tecla == 48){tecla = 'n0';Numbers(tecla);}
        if(tecla == 56 || tecla == 106){tecla = 'o*';Funcoes(tecla);}
        if(tecla == 109 || tecla == 189){tecla = 'o-';Funcoes(tecla);}
        if(tecla == 107){tecla = 'o+';Funcoes(tecla);}
        if(tecla == 111 || tecla == 193){tecla = 'o/';Funcoes(tecla);}
        if(tecla == 46 || tecla == 8 || tecla == 37){tecla = 'odel';Funcoes(tecla);}
        if(tecla == 110 || tecla == 188 || tecla == 190){tecla = 'o.';Numbers(tecla); }
        if(tecla == 13 || tecla == 187){tecla = 'o=';Funcoes(tecla);}
        if(tecla == 27){tecla = 'oreset';Funcoes(tecla);}
        console.log(tecla);
        nText = document.getElementById('display1').textContent;
        if(nText=='0'){document.getElementById('display1').textContentv=''}      

    })
}
Screen()//Execução da aplicação através da função Screen

