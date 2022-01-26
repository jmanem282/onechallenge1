
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

let txtOrigen = document.querySelector("#input-texto");
let txtDestino = document.querySelector("#msg");
let btnEncriptar = document.querySelector("#btn-encriptar");
let btnDesencriptar = document.querySelector("#btn-desencriptar");
let btnCopiar = document.querySelector("#btn-copiar");
const patron = /^[a-z\s\ñ]+$/;


function encriptar(){
    let msg = txtOrigen.value;
    let msgenc = "";
    msg = msg.toLowerCase().trim();
    if(validarMsg(msg)){
        for(i=0;i<msg.length;i++){
            switch(msg[i]){
                case 'a':
                    msgenc = msgenc + "ai";
                    break;
                case 'e':
                    msgenc = msgenc + "enter";
                    break;
                case 'i':
                    msgenc = msgenc + "imes";
                    break;
                case 'o':
                    msgenc = msgenc + "ober";
                    break;
                case 'u':
                    msgenc = msgenc + "ufat";
                    break;
                default:
                    msgenc = msgenc + msg[i];
            }
        }
        txtDestino.value = msgenc;
    }
}

function desencriptar(){
    let msg = txtOrigen.value;
    let msgdesenc = "";
    msg = msg.toLowerCase().trim();
    if(validarMsg(msg)){
        for(i=0;i<msg.length;i++){
            switch(msg[i]){
                case 'a':
                    msgdesenc = msgdesenc + "a";
                    i++;
                    break;
                case 'e':
                    msgdesenc = msgdesenc + "e";
                    i = i+4;
                    break;
                case 'i':
                    msgdesenc = msgdesenc + "i";
                    i = i+3;
                    break;
                case 'o':
                    msgdesenc = msgdesenc + "o";
                    i = i+3;
                    break;
                case 'u':
                    msgdesenc = msgdesenc + "u";
                    i = i+3;
                    break;
                default:
                    msgdesenc = msgdesenc + msg[i];
            }
        }
        txtDestino.value = msgdesenc;
    }
}

function copiar(){
    let msg = txtDestino.value;
    msg = msg.trim()
    if(msg==""){
        alert("No hay texto para copiar");
        txtDestino.focus();
    }
    else{
        txtDestino.select();
        navigator.clipboard.writeText(msg);

    }
}

function validarMsg(msg){
    if(msg == ""){
        alert("Mensaje vacío");
        return false;
    }
    else if(patron.test(msg)){
        return true;
    }
    else{
        alert("Sólo se permiten letras sin acentos");
        return false;
    }
    
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
