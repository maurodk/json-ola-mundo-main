let requestURL = "https://maurodk.github.io/json-ola-mundo/irineu.json";

let host = new XMLHttpRequest();

host.open("GET", requestURL);

host.responseType = "json";

host.send();

host.onload = function() {
    const dados = host.response;

    const header = document.querySelector("header");
    const section = document.querySelector("section");

    const criarh1 = document.createElement("h1");
    criarh1.textContent = "Irineu Store";
    header.appendChild(criarh1);

    const criarp = document.createElement("p");
    criarp.textContent = "Loja: Irineu Store";
    header.appendChild(criarp);

    const article1 = document.createElement("article");
    const article2 = document.createElement("article");
    const article3 = document.createElement("article");

    const ulNotebooks = document.createElement("ul");
    const ulCelulares = document.createElement("ul");
    const ulAcessorios = document.createElement("ul");

    const h2Notebook = document.createElement("h2");
    h2Notebook.textContent = "Notebooks";
    article1.appendChild(h2Notebook);
    section.appendChild(article1);

    const h2Celular = document.createElement("h2");
    h2Celular.textContent = "Celular";
    article2.appendChild(h2Celular);
    section.appendChild(article2);

    const h2Acessorios = document.createElement("h2");
    h2Acessorios.textContent = "Acessórios";
    article3.appendChild(h2Acessorios);
    section.appendChild(article3);

    dados.Notebook.forEach(notebook => {
        const p = document.createElement("p");
        p.innerHTML = `Marca: ${notebook.Marca} <br> Modelo: ${notebook.Modelo} <br> Valor: R$${notebook.Valor.toFixed(2)}`;
        ulNotebooks.appendChild(p);
        article1.appendChild(ulNotebooks);
    });

    dados.Celular.forEach(celular => {
        const p = document.createElement("p");
        p.innerHTML = `Marca: ${celular.Marca} <br> Modelo: ${celular.Modelo} <br> Valor: R$${celular.Valor.toFixed(2)}`;
        ulCelulares.appendChild(p);
        article2.appendChild(ulCelulares);
    });

    dados.Acessórios.forEach(acessorio => {
        const p = document.createElement("p");
        p.innerHTML = `Marca: ${acessorio.Marca} <br> Modelo: ${acessorio.Modelo} <br> Valor: R$${acessorio.Valor.toFixed(2)}`;
        ulAcessorios.appendChild(p);
        article3.appendChild(ulAcessorios);
    });
};
