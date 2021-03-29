console.log(document);

const botaoTeste = document.getElementById('botao-teste');
const outroBotao = document.getElementById('outro-botao');
console.log(botaoTeste);
console.log(outroBotao);

const botaoSelector = document.querySelector('#botao-selector');
console.log(botaoSelector);

const botaoPrincipal = document.querySelector('.botao-principal');
console.log(botaoPrincipal);

const lista = document.querySelector('ul');
console.log(lista);

///////////////////////////////////////

const botaoVarios1 = document.querySelector('.botao-varios');
console.log(botaoVarios1);

const variosBotoes = document.querySelectorAll('.botao-varios');
console.log(variosBotoes);
console.log(variosBotoes[2]);

for (const botao of variosBotoes) {
  console.log(botao);
}

///////////////////////////////////////

const botaoMudar = document.querySelector('.botao-mudar');
console.log(botaoMudar.textContent);

botaoMudar.textContent = '<strong>Agora eu mudei o texto</strong>';

const paragrafo = document.querySelector('p');
console.log(paragrafo.innerHTML);
paragrafo.innerHTML = `<strong>${paragrafo.innerHTML}</strong>`;
console.log(paragrafo.innerHTML);
console.log(paragrafo.textContent);

///////////////////////////////////////

const botaoEstilizado = document.querySelector('.botao-estilizado');
botaoEstilizado.style.backgroundColor = '#90ff50';
botaoEstilizado.style.fontSize = '200%';

const botaoAumentar = document.querySelector('#botao-aumentar');
botaoAumentar.classList.add('grande');
botaoAumentar.classList.add('colorida');
botaoAumentar.classList.add('teste');

console.log(botaoAumentar.classList);
console.log(botaoAumentar.classList);

botaoAumentar.classList.remove('teste');
console.log(botaoAumentar.classList);

///////////////////////////////////////

const inputNome = document.querySelector('#nome');
console.log(inputNome.value);
inputNome.value = `${inputNome.value}!!!!!!`
console.log(inputNome.value);

const checkAssinar = document.querySelector('#assinar');
console.log(checkAssinar.checked);
checkAssinar.checked = !checkAssinar.checked;
console.log(checkAssinar.checked);

///////////////////////////////////////

