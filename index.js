const form = document.querySelector("#chat-body-form");

function enviaMensagem(e){

    e.preventDefault();

    const chatBodyBox = document.querySelector("#chat-body-box");

    const inputValue = document.querySelector("#mensagem-input-1").value;

    const nomeDoUsuario = "Você";

    let elementoDiv = document.createElement("div");
    elementoDiv.classList.add("mensagem", "mensagem-enviada");

    let elementoSpanAut = document.createElement("span");
    elementoSpanAut.classList.add("mensagem-aut", "mensagem-enviada-aut");

    let elementoSpanConteudo = document.createElement("span");
    elementoSpanConteudo.classList.add("mensagem-conteudo");

    let elementoPNome = document.createElement("p");
    elementoPNome.classList.add("mensagem-aut-nome");
    elementoPNome.innerHTML = nomeDoUsuario;

    let elementoPDiz = document.createElement("p");
    elementoPDiz.classList.add("mensagem-aut-diz");
    elementoPDiz.innerHTML = "diz:";

    let elementoPConteudo = document.createElement("p");
    elementoPConteudo.classList.add("mensagem-conteudo-p");
    elementoPConteudo.innerHTML = inputValue

    elementoSpanAut.appendChild(elementoPNome);
    elementoSpanAut.appendChild(elementoPDiz);

    elementoSpanConteudo.appendChild(elementoPConteudo);

    elementoDiv.appendChild(elementoSpanAut);
    elementoDiv.appendChild(elementoSpanConteudo);

    chatBodyBox.appendChild(elementoDiv);

    document.querySelector("#mensagem-input-1").value = "";


} 

form.addEventListener("submit", enviaMensagem);