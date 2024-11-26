// Logica do carrinho de compras

// Seleciona elementos da interface
const products = document.querySelectorAll('.add-to-cart');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');

// Array para armazenar os itens do carrinho
let cart = [];

// Função para adicionar produto ao carrinho
products.forEach(product => {
  product.addEventListener('click', () => {
    const productElement = product.parentElement;
    const id = productElement.dataset.id;
    const name = productElement.dataset.name;
    const price = parseFloat(productElement.dataset.price);

    // Verifica se o item já está no carrinho
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ id, name, price, quantity: 1 });
    }

    updateCart();
  });
});

// Função para atualizar o carrinho
function updateCart() {
  // Limpa a lista do carrinho
  cartItems.innerHTML = '';

  // Recalcula o total e exibe os itens no carrinho
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$${item.price.toFixed(2)} x ${item.quantity}`;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = total.toFixed(2);
}

// Evento para finalizar compra
document.querySelector('.checkout').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('O carrinho está vazio!');
  } else {
    alert('Compra finalizada! Obrigado por comprar conosco.');
    cart = []; // Limpa o carrinho
    updateCart();
  }
});


// ----

const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');

// Função para adicionar ao carrinho
function addToCart(event) {
    const button = event.target;
    const product = button.closest('.product-card');
    const productId = product.getAttribute('data-id');
    const productName = product.getAttribute('data-name');
    const productPrice = parseFloat(product.getAttribute('data-price'));

    // Verifica se o item já está no carrinho
    const existingItem = cartItems.querySelector(`[data-id="${productId}"]`);
    if (existingItem) {
        alert('Este produto já está no carrinho!');
        return;
    }

    // Cria o elemento do item no carrinho
    const cartItem = document.createElement('li');
    cartItem.setAttribute('data-id', productId);
    cartItem.innerHTML = `
        ${productName} - R$${productPrice.toFixed(2)}
        <button class="remove-from-cart">Remover</button>
    `;

    // Adiciona ao carrinho
    cartItems.appendChild(cartItem);
    updateCartTotal();

    // Adiciona evento ao botão de remover
    cartItem.querySelector('.remove-from-cart').addEventListener('click', () => {
        cartItem.remove();
        updateCartTotal();
    });
}

// Atualiza o total do carrinho
function updateCartTotal() {
    let total = 0;
    const items = cartItems.querySelectorAll('li');
    items.forEach(item => {
        const priceText = item.textContent.match(/R\$([\d.]+)/);
        if (priceText) {
            total += parseFloat(priceText[1]);
        }
    });
    cartTotal.textContent = total.toFixed(2);
}

// Adiciona eventos aos botões de adicionar ao carrinho
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});
