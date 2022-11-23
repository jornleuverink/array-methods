const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
]

// 1

const names = superheroes.map(hero => {
    return hero.name;
})

console.log(names);

// 2

const light = superheroes.map(hero => {
    if (hero.weight < 190) {
        return hero.name;
    } else {
        return "Heavy";
    }
})

console.log(light);

// 3

const heavy = superheroes.filter(hero => {
    return hero.weight == 200;
});

const heavyHeroes = heavy.map(hero => {
    return hero.name;
})

console.log(heavyHeroes);

// 4

const first = superheroes.map(hero => hero.first_appearance);

console.log("First appearance:", first);

// 5

const dcComics = superheroes.filter(hero => {
    return hero.publisher  === 'DC Comics';
});

const dcComicsList = dcComics.map(hero => {
    return hero.name;
});

console.log(dcComicsList + " are from DC Comics.");

const Marvel = superheroes.filter(hero => {
    return hero.publisher  === 'Marvel Comics';
});

const MarvelList = Marvel.map(hero => {
    return hero.name;
});

console.log(MarvelList + " are from Marvel Comics.");

// 6

const dcComicsWeight = superheroes.filter(hero => {
    return hero.publisher  === 'DC Comics';
});

const dcComicsWeightList = dcComicsWeight.map(hero => {
    return parseInt(hero.weight, 10);
});

const dcSum = dcComicsWeightList.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("Total weight DC Comics = " + dcSum);

// 7 

const marvelComicsWeight = superheroes.filter(hero => {
    return hero.publisher  === 'Marvel Comics';
});

const marvelComicsWeightList = marvelComicsWeight.map(hero => {
    return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;
});

const marvelSum = marvelComicsWeightList.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("Total weight Marvel Comics = " + marvelSum);

// 8

const allHeroes = superheroes.map (hero => {
    const weight = hero.weight !== "unknown" ? parseInt(hero.weight) : 0;
    hero.weight = weight;
    return hero;
});

const heaviestHero = allHeroes.reduce(
    (currentHeaviestHero, currentHero) => {
    if (currentHero.weight > currentHeaviestHero.weight) {
    return currentHero;
    } else {
    return currentHeaviestHero;
    }
}, allHeroes[0]);

console.log("The heaviest hero is: ", heaviestHero);