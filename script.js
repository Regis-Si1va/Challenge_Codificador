const cxMsg1 = document.querySelector(".msg");
const cxMsg2 = document.querySelector(".texto");

function btnEncriptar() {

	const strEncriptado = encriptar(cxMsg1.value);
	cxMsg2.value = strEncriptado;
	cxMsg2.style.background = "none";
	cxMsg1.value = '';
}

function btnDesencriptar() {
	const mensagem = desencriptar(cxMsg1.value);
	cxMsg2.value = mensagem;
	cxMsg2.style.background = "none";
	cxMsg2.style.wordWrap = "initial";
	cxMsg1.value = '';
}


function encriptar(str) {
	let baseMsg = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
	str = str.toLowerCase();

	for(let i=0; i < baseMsg.length; i++) {
		if(str.includes(baseMsg[i][0])) {
			str = str.replaceAll(baseMsg[i][0], baseMsg[i][1]);
		}
	}

	return str;
}

function desencriptar(str) {

	let baseMsg = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"],['mes','']];

	for(let i=0; i < baseMsg.length; i++) {
		if(str.indexOf(baseMsg[i][0])!== -1) {
			str = str.replaceAll(baseMsg[i][0], baseMsg[i][1]);
		}
	}

	return str;

}

function copiar(){
    cxMsg2.select();
    document.execCommand('copy');
    document.execCommand('delete');
    let imgTexto = document.querySelector(".texto");
    imgTexto.style.backgroundImage = "url(produtos.png)";
    imgTexto.style.backgroundRepeat = "no-repeat"
}

let btnCopiar = document.querySelector("button.copiar");
btnCopiar.onclick = copiar;