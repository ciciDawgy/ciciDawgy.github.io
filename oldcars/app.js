
(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.querySelector('.cart');

    cart.addEventListener('click', function(){
        cart.classList.toggle('showCart');
    })
})();