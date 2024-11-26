

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
