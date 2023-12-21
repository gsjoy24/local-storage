document.getElementById('btn-submit').addEventListener('click', () => {
	const itemInput = document.getElementById('item');
	const itemName = itemInput.value;

	const priceInput = document.getElementById('price');
	const price = priceInput.value;

	itemInput.value = '';
	priceInput.value = '';

	if (itemName && price) {
		displayProducts(itemName, price);
	} else {
		alert('Please enter valid information!!!');
	}

	setCartDataToLocalStorage(itemName, price);
});

const displayProducts = (itemName, price) => {
	const productContainer = document.getElementById('products');
	const product = document.createElement('li');
	product.innerText = `Item: ${itemName}, Price: ${price}`;
	productContainer.appendChild(product);
};

const getStoredData = () => {
	let cart = {};
	const storedData = localStorage.getItem('cart');
	if (storedData) {
		cart = JSON.parse(storedData);
	}
	return cart;
};

const setCartDataToLocalStorage = (itemName, price) => {
	const cart = getStoredData();
	cart[itemName] = price;
	const cartStr = JSON.stringify(cart);
	localStorage.setItem('cart', cartStr);
};

const displayProductsFromLocalStorage = () => {
	const cart = getStoredData();
	for (const product in cart) {
		const price = cart[product];
		displayProducts(product, price);
	}
};
displayProductsFromLocalStorage();
