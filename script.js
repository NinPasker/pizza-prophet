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

//  Listen for form submit 
const form = document.querySelector('form');
form.addEventListener('submit', e => {
	e.preventDefault();
	// Once form submits grab values from selected radio inputs.
	const sizeSelected = document.querySelector('input[name=size]:checked').value;
	const priceSelected = document.querySelector('input[name=price]:checked').value;

	console.log(sizeSelected, priceSelected);
})
// Use radio inpit values, to look through pizza object 
// Display the matching pizza joint to user
