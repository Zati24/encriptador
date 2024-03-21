const inputTexto = document.querySelector(".inputText");
const mensaje = document.querySelector(".inputText2");


function btnencriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}


function encriptar(StringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
for (let i= 0; i< matrizCodigo.length; i++){
    if(StringParaEncriptar.includes(matrizCodigo[i][0])){
        StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],
            matrizCodigo[i][1]);
    }
}
return StringParaEncriptar;
}


const inputTexto2 = document.querySelector(".inputText");
const mensajed = document.querySelector(".inputText2");


function btndecriptar(){
    const textoEncriptado = decriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}


function decriptar(StringParaEncriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
for (let i= 0; i< matrizCodigo.length; i++){
    if(StringParaEncriptar.includes(matrizCodigo[i][0])){
        StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],
            matrizCodigo[i][1]);
    }
}
return StringParaEncriptar;
}




