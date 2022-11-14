const pokedex = document.getElementById('pokedex')

const type = document.querySelector('.card-subtitle');

const fetchGenOne = () => {
    const promises = [];
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name.charAt(0).toUpperCase() + result.name.slice(1),
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};
document.querySelector('.gen1').addEventListener('click', fetchGenOne);

const fetchGenTwo = () => {
    const promises = [];
    for (let i = 152; i <= 251; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name.charAt(0).toUpperCase() + result.name.slice(1),
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};
document.querySelector('.gen2').addEventListener('click', fetchGenTwo);

const fetchGenThree = () => {
    const promises = [];
    for (let i = 252; i <= 386; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            // capitlize first letter of name
            name: result.name.charAt(0).toUpperCase() + result.name.slice(1),
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};
document.querySelector('.gen3').addEventListener('click', fetchGenThree);

const fetchGenFour = () => {
    const promises = [];
    for (let i = 387; i <= 493; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            // capitlize first letter of name
            name: result.name.charAt(0).toUpperCase() + result.name.slice(1),
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};
document.querySelector('.gen4').addEventListener('click', fetchGenFour);

const fetchGenFive = () => {
    const promises = [];
    for (let i = 494; i <= 649; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            // capitlize first letter of name
            name: result.name.charAt(0).toUpperCase() + result.name.slice(1),
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};
document.querySelector('.gen5').addEventListener('click', fetchGenFive);

const fetchGenSix = () => {
    const promises = [];
    for (let i = 650; i <= 721; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            // capitlize first letter of name
            name: result.name.charAt(0).toUpperCase() + result.name.slice(1),
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};
document.querySelector('.gen6').addEventListener('click', fetchGenSix);

const fetchGenSeven = () => {
    const promises = [];
    for (let i = 722; i <= 809; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            // capitlize first letter of name
            name: result.name.charAt(0).toUpperCase() + result.name.slice(1),
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};
document.querySelector('.gen7').addEventListener('click', fetchGenSeven);

const fetchGenEight = () => {
    const promises = [];
    for (let i = 810; i <= 898; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            // capitlize first letter of name
            name: result.name.charAt(0).toUpperCase() + result.name.slice(1),
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};
document.querySelector('.gen8').addEventListener('click', fetchGenEight);
    

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHtmlString = pokemon.map( pokemans => `
    <li class="card">
        <img class = "card-image" src = "${pokemans.image}"/>
        <h2 class="card-title">${pokemans.id}. ${pokemans.name}</h2>
        <p class="card-subtitle">Type: ${pokemans.type}</p>
    </li>
    `)
    .join('')
    pokedex.innerHTML = [pokemonHtmlString];
    
}

