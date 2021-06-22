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

// Funzione per filtrare le icone in base alla scelta
function filterIcons(value, arrayList) {

	const newArray = arrayList.filter((icon) => {

		if (value === 'all') {
			return true;
		}

		if (value === icon.type) {
			return true;
		}

		return false
	})

	return newArray;
}


function printHTML(value) {

	// creo un nuovo array con con la mia funzione filtro
	const newArrayFiltrato = filterIcons(value, icons);

	// prendo l'elemtent
	const outputHTML = document.querySelector('.card-container');

	// resetto l'HTML ogni volta che viene lanciata la funzione
	// altrimenti mi aggiunge sotto le icone
	outputHTML.innerHTML = "";

	// per ciascuna icona nell'array stampo
	newArrayFiltrato.forEach((icon) => {

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

}

// lancio la mia funzione di stampa che mi stampa 'all' tutti i tipi
printHTML('all');

// Vado a prendere il l'elemento della select
const scelta = document.querySelector('.filter-select');

// ad ogni change della select rilancio
// la mia funzione che stampa, pero in questo caso la rilancia 
// in base alla value  
scelta.addEventListener('change', (event) => {
	printHTML(event.target.value);
});