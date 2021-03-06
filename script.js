const pizza = {
	pie: [
		{
			title: 'Maker Pizza',
			price: '$$'
		},
		{
			title: 'Pizza Libretto',
			price: '$$'
		},
		{
			title: 'Dominoes',
			price: '$'
		}
	],
	slice: [
		{
			title: 'Pizzaiolo',
			price: '$$'
		},
		{
			title: 'North of Brooklyn',
			price: '$$'
		},
		{
			title: 'Pizza Pizza',
			price: '$'
		},
		{
			title: 'King Slice',
			price: '$'
		}
	]
};

const randomElement = (array) => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

const pizzaProphetInit = () => {
	//  Listen for form submit 
	const form = document.querySelector('form');
	form.addEventListener('submit', e => {
		e.preventDefault();
		// Once form submits grab values from selected radio inputs.
		const sizeSelected = document.querySelector('input[name=size]:checked').value;
		const priceSelected = document.querySelector('input[name=price]:checked').value;

		console.log(sizeSelected, priceSelected);
		// Use radio inpit values, to look through pizza object 

		const sizePizzaList = pizza[sizeSelected];

		console.log(sizePizzaList);

		const pricePizzaList = sizePizzaList.filter((pizzaPlace) =>
			pizzaPlace.price === priceSelected);

		const finalPizzaPlace = randomElement(pricePizzaList);
		console.log("FINAL: ", finalPizzaPlace);

		// Display the matching pizza joint to user

		const pizzaHtml = `<h2>Go Here! ➡ <span class="restaurant">${finalPizzaPlace.title}</span></h2>`;
		
		document.querySelector('.results').innerHTML = pizzaHtml;
	})
}

if (document.readyState === 'complete') {
	// IE 8 Support
	pizzaProphetInit();
} else {
	// Other modern browsers
	document.addEventListener('DOMContentLoaded', pizzaProphetInit);
}