// Mapeamento
const inputProduto = document.getElementById('inputProduto');
const inputPreco = document.getElementById('inputPreco');
const btnCadastrar = document.getElementById('btnCadastrar');

const listaProdutos = document.getElementById('listaProdutos');
const listaComprados = document.getElementById('listaComprados');
const valorTotalExibicao = document.getElementById('valorTotal');

const btnToggleLista = document.getElementById('btnToggleLista');
const btnToggleComprados = document.getElementById('btnToggleComprados');

let totalGeral = 0;

// --- FUNCIONALIDADE 1: MOSTRAR/ESCONDER ---
function alternarVisibilidade(elemento) {
    if (elemento.style.display === "none") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}

btnToggleLista.onclick = () => alternarVisibilidade(listaProdutos);
btnToggleComprados.onclick = () => alternarVisibilidade(listaComprados);


// --- FUNCIONALIDADE 2: CADASTRO E COMPRA ---
function cadastrarItem() {
    const nome = inputProduto.value;
    const preco = parseFloat(inputPreco.value);

    if (!nome || isNaN(preco)) return alert("Preencha os campos!");

    const li = document.createElement('li');
    li.innerHTML = `
        ${nome} - R$ ${preco.toFixed(2)} 
        <button class="btn-comprar">Comprar</button>
    `;

    // Ação do botão COMPRAR
    li.querySelector('.btn-comprar').onclick = function() {
        // 1. Move o elemento para a outra lista
        listaComprados.appendChild(li);
        
        // 2. Remove o botão de comprar (já que já comprou)
        this.remove(); 

        // 3. Soma ao total
        totalGeral += preco;
        valorTotalExibicao.textContent = totalGeral.toFixed(2);
    };

    listaProdutos.appendChild(li);
    
    // Limpeza
    inputProduto.value = "";
    inputPreco.value = "";
}

btnCadastrar.onclick = cadastrarItem;