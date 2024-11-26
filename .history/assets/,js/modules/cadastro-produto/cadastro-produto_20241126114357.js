let produtoEditandoIndex = null;  // Variável global para armazenar o índice do produto sendo editado.

function cadastrarProduto() {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const descricao = document.getElementById('descricao').value;
    const urlImage = document.getElementById('urlImage').value;

    const produto = {
        nome,
        preco,
        descricao,
        urlImage
    };

    if (produto.nome && produto.preco && produto.descricao) {
        let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

        // Se estiver editando um produto, atualize ele, caso contrário, adicione um novo
        if (produtoEditandoIndex !== null) {
            produtos[produtoEditandoIndex] = produto;  // Atualiza o produto no índice correspondente
            produtoEditandoIndex = null;  // Limpa o índice de edição
        } else {
            produtos.push(produto);  // Adiciona um novo produto
        }

        localStorage.setItem('produtos', JSON.stringify(produtos));
        limparFormulario();
        exibirProdutos();
    } else {
        alert('Preencha todos os campos para cadastrar o produto!');
    }
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('urlImage').value = '';
}

function exibirProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    for (let i in produtos) {
        const produto = produtos[i];
        const li = document.createElement('li');

        const img = document.createElement('img');
        img.src = produto.urlImage;
        img.style.margin = '10px'; 
        img.style.width = '100px'; 
        img.style.height = 'auto';

        li.textContent = `${produto.nome} - R$${produto.preco} - ${produto.descricao}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Deletar';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => deletarProduto(i);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.classList.add('edit-btn');
        editBtn.onclick = () => editarProduto(i);  // Chama a função para editar o produto

        li.appendChild(img);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        listaProdutos.appendChild(li);
    }
}

function deletarProduto(index) {
    let produtos = JSON.parse(localStorage.getItem('produtos'));
    produtos.splice(index, 1);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    exibirProdutos();
}

function limparProdutos() {
    localStorage.removeItem('produtos');
    exibirProdutos();
}

function editarProduto(index) {
    let produtos = JSON.parse(localStorage.getItem('produtos'));
    const produto = produtos[index];

    // Preenche o formulário com os dados do produto
    document.getElementById('nome').value = produto.nome;
    document.getElementById('preco').value = produto.preco;
    document.getElementById('descricao').value = produto.descricao;
    document.getElementById('urlImage').value = produto.urlImage;

    produtoEditandoIndex = index;  // Marca o produto que está sendo editado
}

window.onload = exibirProdutos;

let produtoEditandoIndex = null;  // Variável global para armazenar o índice do produto sendo editado.

function cadastrarProduto() {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const descricao = document.getElementById('descricao').value;
    const urlImage = document.getElementById('urlImage').value;

    const produto = {
        nome,
        preco,
        descricao,
        urlImage
    };

    if (produto.nome && produto.preco && produto.descricao) {
        let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

        // Se estiver editando um produto, atualize ele, caso contrário, adicione um novo
        if (produtoEditandoIndex !== null) {
            produtos[produtoEditandoIndex] = produto;  // Atualiza o produto no índice correspondente
            produtoEditandoIndex = null;  // Limpa o índice de edição
        } else {
            produtos.push(produto);  // Adiciona um novo produto
        }

        localStorage.setItem('produtos', JSON.stringify(produtos));
        limparFormulario();
        exibirProdutos();
    } else {
        alert('Preencha todos os campos para cadastrar o produto!');
    }
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('urlImage').value = '';
}

function exibirProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    for (let i in produtos) {
        const produto = produtos[i];
        const li = document.createElement('li');

        const img = document.createElement('img');
        img.src = produto.urlImage;
        img.style.margin = '10px'; 
        img.style.width = '100px'; 
        img.style.height = 'auto';

        li.textContent = `${produto.nome} - R$${produto.preco} - ${produto.descricao}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Deletar';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => deletarProduto(i);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.classList.add('edit-btn');
        editBtn.onclick = () => editarProduto(i);  // Chama a função para editar o produto

        li.appendChild(img);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        listaProdutos.appendChild(li);
    }
}

function deletarProduto(index) {
    let produtos = JSON.parse(localStorage.getItem('produtos'));
    produtos.splice(index, 1);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    exibirProdutos();
}

function limparProdutos() {
    localStorage.removeItem('produtos');
    exibirProdutos();
}

function editarProduto(index) {
    let produtos = JSON.parse(localStorage.getItem('produtos'));
    const produto = produtos[index];

    // Preenche o formulário com os dados do produto
    document.getElementById('nome').value = produto.nome;
    document.getElementById('preco').value = produto.preco;
    document.getElementById('descricao').value = produto.descricao;
    document.getElementById('urlImage').value = produto.urlImage;

    produtoEditandoIndex = index;  // Marca o produto que está sendo editado
}

window.onload = exibirProdutos;
