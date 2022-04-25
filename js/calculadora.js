function AcenderBotãoN(str){
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
function Calcular() {
    console.log(Number.isNaN(document.getElementById('display1').innerHTML))
    var x = document.getElementById('display2').innerHTML;
    console.log('este é x',x)
    if(x){
        console.log('Calculo capturado:', x);
        resultado = eval(x);
        if(resultado == NaN){
            return '0';
         }
        else if(Number.isInteger(resultado)){
            console.log('Resultado do calculo:', resultado);
            //if(resultado.length > 12){
           
            return resultado;
            
        }else{
            console.log('Resultado do calculo:', resultado);
            resultado = parseFloat(resultado.toFixed(6));
            return resultado;
            }                  
    
    }else{
        document.getElementById('display1').innerHTML = '0';
    }
}
function Scanumber (){
    const valor = document.getElementById('display1');
    return valor;
}
function CheckClean(){
    document.getElementById('display1').textContent = '0';
    
}
function ZeroClean (text){
    let x = document.getElementById('display1').textContent;
    let y = document.getElementById('display2').textContent;
    const str = x
    const str2 = str.charAt(str.length -1);
    console.log("O ultimo char do display1 é:", str2);
    console.log("O texto é:", text);
    
    if(str2 == '.' & text == '.'){
        
        Del();
    }
    
    if(x.includes('0.') ){
        console.log('O display1 contem:',x)
        return;
     }
    else if( Number(x) == 0 & x != '0.'){
        if(text == '.'){
            return;
        }else{
            console.log('Tem um zero', x);
            document.getElementById('display1').textContent = '';
        }
        
    }
    if(document.getElementById('display3').textContent == '='){
        document.getElementById('display1').textContent = '0';
        document.getElementById('display2').textContent = '';
        document.getElementById('display3').textContent = '⠀';
    }
 }
function Inserir(str){
    const display1 = document.getElementById('display1').innerHTML;
    if(display1.includes('.') & str == '.'){
        console.log('O display1 contem:',display1 ,'JÁ EXISTE UM PONTO!')
        return;
     }
    if(display1.length > 12){return;}
    const display3 = document.getElementById('display3').innerHTML;
    if(display3 == '='){
        document.getElementById('display1').innerHTML = '';
        document.getElementById('display2').innerHTML = '';
    }
    console.log(display1,'+',str);
    display1Text =  document.getElementById('display1').innerHTML;
    document.getElementById('display1').innerHTML = display1Text + str;
   
}
function InserirCalculo(str, op){
    let display3 = document.getElementById('display3').innerHTML;
  
    if(display3 == '='){
        let display1 = document.getElementById('display1').innerHTML;
        console.log('Display 3 é = ', display3);
        document.getElementById('display1').innerHTML = '';
        console.log('Display 1 é = ', display1);
        document.getElementById('display2').innerHTML = display1 + op;
        document.getElementById('display3').textContent = op;
    }else{
    display2Text =  document.getElementById('display2').innerHTML;
    concText = str + op;
    if(display3 == '+' ||display3 == '-' ||display3 == '/' ||display3 == '*' ||display3 == '%'){
        let str = document.getElementById('display2').innerHTML;
        str2 = str.substr(0,str.length -1);
        document.getElementById('display2').innerHTML == str2 + op;
        console.log('Valor no display3:', display3,"Display2 antes:",str,'Display2 agora:', str2)
    }
    if(concText == "0-" ||concText == "0+"||concText == "0*"||concText == "0%"||concText == "0/"){
        let str = document.getElementById('display2').innerHTML;
        str2 = str.substr(0,str.length - 1);
        console.log('Str2 está:', str2);
        document.getElementById('display2').innerHTML = str2 + op;
        document.getElementById('display3').textContent = op;
    }else{
        document.getElementById('display2').innerHTML = display2Text + str + op;
        document.getElementById('display3').textContent = op;
    }

}}
function Numbers(n){
        AcenderBotãoN(n)
        switch(n){
            case  'n1':
                ZeroClean();
                text ='1'
                Inserir(text);
                break;
                // tecla 1

            case 'n2':
                ZeroClean()
                text ='2'
                Inserir(text);
                break;
            // tecla 2

            case 'n3':
                ZeroClean();
                text ='3'
                Inserir(text);
                break;
            // tecla 3

            case 'n4':
                ZeroClean();
                text ='4'
                Inserir(text);
                break;
            // tecla 4

            case 'n5':
                ZeroClean();
                text ='5'
                Inserir(text);
                break;
            // tecla 5

            case 'n6':
                ZeroClean();
                text ='6'
                Inserir(text);
                break;
            // tecla 6

            case 'n7':
                ZeroClean();
                text ='7'
                Inserir(text);
                break;
            // tecla 7

            case 'n8':
                ZeroClean();
                text ='8'
                Inserir(text);
                break;
            // tecla 8

            case 'n9':
                ZeroClean(); 
                text ='9'
                Inserir(text);
                break;
            // tecla 9

            case 'n0':
                ZeroClean()
                text ='0'
                Inserir(text);
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
                Inserir(text);
                break;
                    
                // tecla , . ,numpad
    }
}
function Funcoes(f){
    AcenderBotãoN(f)
    switch(f){

        case 'o*':
                console.log('*');
                op = '*';
                //Capturando o primeiro produto para a operação
                valor1 = parseFloat(document.getElementById('display1').textContent);
                InserirCalculo(valor1, op)
                CheckClean()
                break;
            // tecla */*numpad

            case 'o-':
                console.log('-');
                op = '-';
                valor1 = parseFloat(document.getElementById('display1').textContent);
                InserirCalculo(valor1, op)
                CheckClean()
                break;
            // tecla -/-numpad

            case 'o+':
                console.log('+');
                op = '+';
                valor1 = parseFloat(document.getElementById('display1').textContent);
                InserirCalculo(valor1, op)
                CheckClean()
                break;
            // tecla +/+numpad

            case 'o/':
                console.log('/');
                op = '/';
                valor1 = parseFloat(document.getElementById('display1').textContent);
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
                //implementar impressao do historico{  
                valor1 = parseFloat(document.getElementById('display1').textContent);
                InserirCalculo(valor1,'');
                document.getElementById('display1').textContent = Calcular();
                text = '=';
                document.getElementById('display2').textContent = document.getElementById('display1').textContent;
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
function Reset(){
    document.getElementById('display1').textContent='0'
    document.getElementById('display2').textContent='' 
    document.getElementById('display3').textContent='⠀'   
}
function Del(){
    const display3 = document.getElementById('display3').innerHTML;
    const display1 = document.getElementById('display1').innerHTML;
    
    if(display3 == '='){
        console.log('Display 1 contem:', display1);
        document.getElementById('display1').innerHTML = '0'; 
        document.getElementById('display2').innerHTML = ''; 
        document.getElementById('display3').innerHTML = '⠀'; 
        return;
    }
    else if(display1.length <1 || display1 == '' || display1 == '0' ){
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
     
    }if(Number.isNaN(document.getElementById('display1').innerHTML)){
        console.log('Display1 não tem um número',Number.isNaN(document.getElementById('display1').innerHTML))
        document.getElementById('display1').innerHTML = '0';
    }console.log('Display1:', display1)
    if(display1 == '' || display1 == NaN){document.getElementById('display1').innerHTML = '0'}
}
function Screen() {
    
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
function Botoes(str){
    AcenderBotãoN(str);

    switch(str){
        case  'n1':
            ZeroClean();
            text ='1'
            Inserir(text);
            break;
            // tecla 1

        case 'n2':
            ZeroClean()
            text ='2'
            Inserir(text);
            break;
        // tecla 2

        case 'n3':
            ZeroClean();
            text ='3'
            Inserir(text);
            break;
        // tecla 3

        case 'n4':
            ZeroClean();
            text ='4'
            Inserir(text);
            break;
        // tecla 4

        case 'n5':
            ZeroClean();
            text ='5'
            Inserir(text);
            break;
        // tecla 5

        case 'n6':
            ZeroClean();
            text ='6'
            Inserir(text);
            break;
        // tecla 6

        case 'n7':
            ZeroClean();
            text ='7'
            Inserir(text);
            break;
        // tecla 7

        case 'n8':
            ZeroClean();
            text ='8'
            Inserir(text);
            break;
        // tecla 8

        case 'n9':
            ZeroClean(); 
            text ='9'
            Inserir(text);
            break;
        // tecla 9

        case 'n0':
            ZeroClean()
            text ='0'
            Inserir(text);
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
        case 'Ponto':
            text ='.'
            ZeroClean(text); 
            Inserir(text);
            break;

        case 'o*':
            console.log('*');
            op = '*';
            //Capturando o primeiro produto para a operação
            valor1 = parseFloat(document.getElementById('display1').textContent);
            InserirCalculo(valor1, op)
            CheckClean()
            break;
            // tecla */*numpad

        case 'o-':
            console.log('-');
            op = '-';
            valor1 = parseFloat(document.getElementById('display1').textContent);
            InserirCalculo(valor1, op)
            CheckClean()
            break;
            // tecla -/-numpad

        case 'o+':
            console.log('+');
            op = '+';
            valor1 = parseFloat(document.getElementById('display1').textContent);
            InserirCalculo(valor1, op)
            CheckClean()
            break;
        // tecla +/+numpad

        case 'o/':
            console.log('/');
            op = '/';
            valor1 = parseFloat(document.getElementById('display1').textContent);
            InserirCalculo(valor1, op)
            CheckClean()
            break;
            // tecla / ou /numpad
        case 'o%':
                console.log('%');
                op = '%';
                valor1 = parseFloat(document.getElementById('display1').textContent);
                InserirCalculo(valor1, op)
                CheckClean()
                break;
                // tecla / ou /numpad

        case 'odel':
            console.log('Tecla del pressionada')
            Del();
            // tecla del, <- , backspace 
            break;

        case 'o=':
            //implementar impressao do historico{  
            valor1 = parseFloat(document.getElementById('display1').textContent);
            InserirCalculo(valor1,'');
            document.getElementById('display1').textContent = Calcular();
            text = '=';
            document.getElementById('display2').textContent = document.getElementById('display1').textContent;
            document.getElementById('display3').textContent = text;
            break;
            // tecla Enter, =

        case 'Reset':
            console.log('Reset');
            Reset();
            //location.reload();
            break;
            // tecla esc
    }
}
Screen()

