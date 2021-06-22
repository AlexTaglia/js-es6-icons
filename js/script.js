const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

/*
Milestone 1
Partendo dalla seguente struttura dati , 
mostriamo in pagina tutte le icone 
disponibili come da layout.

Milestone 2
Coloriamo le icone per tipo

Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone
*/


// creo un nuovo array che userò per il filtro senza intaccare il mio array base
const newArrayPerFiltro = icons.map((element) => {
	return element;
})
console.log(newArrayPerFiltro);


// Ora devo selezionare i miei value input da applivcare al filtro.
const scelta = document.querySelector('.filter-select');

scelta.addEventListener('change', (event) => {
	const result = event.target.value;
	console.log(result);
  });


// Stampo a video
newArrayPerFiltro.forEach((icon) => {
	const outputHTML = document.querySelector('.card-container');

	outputHTML.innerHTML += `
	<div class='col card-item'>
		<div class='inner-card'>
			<i class="${icon.type} ${icon.family} ${icon.prefix}${icon.name}"></i>
		
			<div class='text text-uppercase'>
				${icon.name}
			</div>
		</div>
	</div>
	`
});
