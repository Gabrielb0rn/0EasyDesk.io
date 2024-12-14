function exibirProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    produtos.forEach((produto, i) => {
        const li = document.createElement('li');
        li.classList.add('product-item'); // Estilizar os itens da lista

        const img = document.createElement('img');
        img.src = produto.urlImage;
        img.alt = produto.nome;
        img.classList.add('product-thumbnail');

        const info = document.createElement('div');
        info.classList.add('product-info');
        info.innerHTML = `
            <h3>${produto.nome}</h3>
            <p><strong>Preço:</strong> R$${produto.preco}</p>
            <p><strong>Descrição:</strong> ${produto.descricao}</p>
        `;

        const actions = document.createElement('div');
        actions.classList.add('product-actions');

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.classList.add('btn', 'btn-edit');
        editBtn.onclick = () => editarProduto(i);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Deletar';
        deleteBtn.classList.add('btn', 'btn-delete');
        deleteBtn.onclick = () => deletarProduto(i);

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(img);
        li.appendChild(info);
        li.appendChild(actions);
        listaProdutos.appendChild(li);
    });
}
