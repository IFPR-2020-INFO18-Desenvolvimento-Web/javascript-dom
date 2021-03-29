const funcaoClique = () => {
  console.log("Usuário clicou no botão.");
};

const botaoMeClique = document.querySelector(".me-clique");
botaoMeClique.addEventListener("click", funcaoClique);

const botaoMeCliqueTambem = document.querySelector(".me-clique-tambem");
botaoMeCliqueTambem.addEventListener("dblclick", () => {
  console.log("Usuário clicou 2x no outro botão.");
});

const botaoEuSei = document.querySelector(".eu-sei-quem-sou");
botaoEuSei.addEventListener("click", (event) => {
  // console.log(event);
  console.log(`Quem gerou o evento: ${event.target.textContent}.`);
});

const form = document.querySelector('#form-enviar');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputNome = form.querySelector('input');
  console.log(inputNome.value);

  const divPessoa = document.querySelector('#pessoa');
  divPessoa.innerHTML = `Nome informado: <em>${inputNome.value}</em>`

  // console.log(e);
});