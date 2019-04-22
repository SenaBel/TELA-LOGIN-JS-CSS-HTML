function acesso (tela){

/*
CHEGA NOME E SENHA - CASO DIGITE COM LETRAS MAIUSCULAS SERÁ CONVERTIDO PARA LETRAS MINUSCULAS
*/

tela.email.value = tela.email.value.toLowerCase()
tela.passoword.value = tela.passoword.value.toLowerCase()

if (tela.email.value == "abel@sena.com.br" && tela.passoword.value == "123456" || tela.
email.value == "natan@teste.com.br" && tela.passoword.value == "123"){
location = "acesso.html"
}

else{
tela.email.value = ""
tela.passoword.value = ""
alert ("Digita Seu Login e Senha Corretos!")
}
}