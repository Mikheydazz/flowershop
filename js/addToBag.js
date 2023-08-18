const btnsAddToCart = document.querySelectorAll('.btn-add-product-to-cart');
const cartTotalAmount = document.getElementById('cart-total-amount');
const btnCartClear = document.getElementById('btn-cart-clear');
const btnsOpenDescription = document.querySelectorAll('.item__menu__more');

for (let i = 0; i < btnsAddToCart.length; i++){
	btnsAddToCart[i].addEventListener('click', function(){
	const cartTotalAmountValue = parseInt(cartTotalAmount.innerHTML)
	const priceCurrentProductEl = btnsAddToCart[i].parentNode.parentNode.children[0];
	const priceCurrentProductValue = parseInt(priceCurrentProductEl.getAttribute('price'))

	if(btnsAddToCart[i].textContent == 'В корзину'){
		cartTotalAmount.innerText = cartTotalAmountValue + priceCurrentProductValue;
		btnsAddToCart[i].textContent = 'Удалить';
		btnsAddToCart[i].style.background = '#ff6699';
	} else {
		cartTotalAmount.innerText = cartTotalAmountValue - priceCurrentProductValue;
		btnsAddToCart[i].textContent = 'В корзину';
		btnsAddToCart[i].style.background = '#f2b892';
	}
	});
}

function clearBag() {
	for (let i = 0; i < btnsAddToCart.length; i++){
		cartTotalAmount.innerHTML = '0';
	}
}

const flowerDiscriptionModal = document.querySelector('.flower-description-modal')
const flowerDiscription = document.querySelector('.flower-description')
for (let i = 0; i < btnsOpenDescription.length; i++){
	btnsOpenDescription[i].addEventListener('click', function(){
		flowerDiscriptionModal.style.display = 'flex';
	});
}
flowerDiscriptionModal.addEventListener('click', function(event) {
	if(event.target != flowerDiscription){
		flowerDiscriptionModal.style.display = 'none';
	}
})

function catalogOpen(){
	const catalog = document.querySelector('.catalog__menu');
	if (catalog.style.transform != 'translateX(-100%)'){
	catalog.style.transform = 'translateX(-100%)'
	} else {
	catalog.style.transform = 'translateX(100%)'
	}
}