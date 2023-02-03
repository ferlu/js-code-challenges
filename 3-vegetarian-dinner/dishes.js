const dishes = [
	{
		name: 'Lasagna',
		vegetarian: false,
	},
	{
		name: 'Fettuccine Alfredo',
		vegetarian: true,
	},
	{
		name: 'Stuffed Manicotti',
		vegetarian: false,
	},
	{
		name: 'Pasta with Pesto Sauce',
		vegetarian: true,
	},
	{
		name: 'Pasta with Chicken and Garlic Sauce',
		vegetarian: false,
	},
	{
		name: 'Pasta with Vodka Sauce',
		vegetarian: true,
	},
	{
		name: 'Four-Cheese Stuffed Shells',
		vegetarian: true,
	},
];

function getVegetarianDishes() {
	let vegDishes = dishes.filter((item) => item.vegetarian === true);
	console.log(vegDishes);
}

getVegetarianDishes();
