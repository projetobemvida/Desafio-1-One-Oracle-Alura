let botaoencriptar = document.querySelector('.btncripto');
let botaodesencriptar =document.querySelector('.btndescripto');
let botaocopiar = document.querySelector('.btncopiar');
let imagem =document.querySelector('imagem');
let texto = document.querySelector('texto');
let titulo =document.querySelector('titulo');

function criptografarTexto(){
    
    
    let textousuario=window.document.getElementById('input').value
    
    let textocifrado = textousuario.replace(/e/g,"enter")
                                    .replace(/i/g,"imes")
                                    .replace(/a/g,"ai")
                                    .replace(/o/gi,"ober")
                                    .replace(/u/gi,"ufat");
   


document.getElementById('texto').innerHTML=  textocifrado;
document.getElementById("imagem").style.display="none";
document.getElementById("titulo").style.display="none";
document.getElementById("texto").style.display="show";
document.getElementById("copiar").style.display="show";
document.getElementById("copiar").style.display="inherit"; 

 
}



function descriptografarTexto(){
    
    
    let textousuario=window.document.getElementById('input').value
    let textodecifrado=textousuario.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");

    console.log(textodecifrado);

    window.document.getElementById('texto').innerHTML=textodecifrado
    

}

function copiar(){
    var copiadoTexto = document.getElementById('input');
    copiadoTexto.select();
    document.execCommand('copy');
    alert('Sua mensagem foi copiada!');
        

}        
        