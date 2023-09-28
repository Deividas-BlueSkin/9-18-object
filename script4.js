// const info = [
//     {
//         index: 0,
//         name: 'The Deep Ones',
//         rating: 4.1,
//         ratingCount: 847,
//         releaseDate: 2020,
//         description: `
//         A married couple rents a beach side Airbnb only to 
//         be surrounded by peculiar neighbors and occurrences. 
//         They soon discover to be in the grips of a mysterious 
//         cult and their ancient sea god.`,
//         genres: ['Horror', 'Sci-Fi'],
//         director: 'Chad Ferrin',
//         actors: ['Gina La Piana', 'Robert Miano', 'Johann Urb'],
//     },
//     {
//         index: 1,
//         name: 'Suitable Flesh',
//         rating: 6.5,
//         ratingCount: 83,
//         releaseDate: 2023,
//         description: `
//         A psychiatrist becomes obsessed with one of her young clients with multiple personalities.`,
//         genres: ['Horror', 'Thriller'],
//         director: 'Joe Lynch',
//         actors: ['Heather Graham', 'Judah Lewis', 'Barbara Crampton'],
//     },
//     {
//         index: 2,
//         name: 'Color Out of Space',
//         rating: 6.2,
//         ratingCount: 54000,
//         releaseDate: 2019,
//         description: `
//         A secluded farm is struck by a strange meteorite which has apocalyptic 
//         consequences for the family living there and possibly the world.`,
//         genres: ['Horror', 'Mystery','Sci-Fi'],
//         director: 'Richard Stanley',
//         actors: ['Nicolas Cage', 'Joely Richardson', 'Madeleine Arthur'],
//     },
//     {
//         index: 3,
//         name: 'Cthulhu',
//         rating: 4.6,
//         ratingCount: 2200,
//         releaseDate: 2007,
//         description: `
//         A Seattle history professor, drawn back to his estranged family on the 
//         Oregon coast to execute his late mother's estate, is reaquainted with 
//         his best friend from childhood, with whom he has a long-awaited tryst. 
//         Caught in an accelerating series of events, he discovers aspects of 
//         his father's New Age cult which take on a dangerous and 
//         apocalyptic significance.`,
//         genres: ['Drama','Horror', 'Thriller'],
//         director: 'Dan Gildark',
//         actors: ['Jason Cottle', 'Casey Curran', 'Ethan Atkinson'],
//     },
//     {
//         index: 4,
//         name: 'Dagon',
//         rating: 6.2,
//         ratingCount: 20000,
//         releaseDate: 2001,
//         description: `
//         A boating accident runs a young man and woman ashore in 
//         a decrepit Spanish fishing town which they discover is 
//         in the grips of an ancient sea god and its 
//         monstrous half human offspring.`,
//         genres: ['Fantasy','Horror', 'Mystery'],
//         director: 'Stuart Gordon',
//         actors: ['Ezra Godden', 'Francisco Rabal', 'Raquel Meroño'],
//     },
//     {
//         index: 5,
//         name: 'The Call of Cthulhu',
//         rating: 7.1,
//         ratingCount: 8700,
//         releaseDate: 2005,
//         description: `
//         While sorting the affairs of his late Uncle, a man accidentally 
//         stumbles across a series of dark secrets connected 
//         to an ancient horror waiting to be freed.`,
//         genres: ['Horror', 'Mystery'],
//         director: 'Andrew Leman',
//         actors: ['Matt Foyer', 'John Bolen', 'Ralph Lucas'],
//     },
//     {
//         index: 6,
//         name: 'Re-Animator',
//         rating: 7.2,
//         ratingCount: 69000,
//         releaseDate: 1985,
//         description: `
//         After an odd new medical student arrives on campus, 
//         a dedicated local and his girlfriend become involved 
//         in bizarre experiments centering around 
//         the re-animation of dead tissue.`,
//         genres: ['Comedy','Horror', 'Sci-Fi'],
//         director: 'Stuart Gordon',
//         actors: ['Jeffrey Combs', 'Bruce Abbott', 'Barbara Crampton'],
//     },
//     {
//         index: 7,
//         name: 'Necronomicon: Book of Dead',
//         rating: 5.8,
//         ratingCount: 6700,
//         releaseDate: 1993,
//         description: `
//         Lovecraft visualizes 3 stories in Necronomicon: 
//         The Drowned, The Cold and Whispers, about bringing 
//         a dead wife and child back to life, extending life and aliens.`,
//         genres: ['Horror'],
//         director: 'Christophe Gans',
//         actors: ['Jeffrey Combs', 'Tony Azito', 'Juan Fernández'],
//     },
//     {
//         index: 8,
//         name: 'From Beyond',
//         rating: 6.6,
//         ratingCount: 27000,
//         releaseDate: 1986,
//         description: `
//         A group of scientists have developed the Resonator, 
//         a machine which allows whoever is within range to 
//         see beyond normal perceptible reality. But when the 
//         experiment succeeds, they are immediately 
//         attacked by terrible life forms`,
//         genres: ['Horror','Sci-Fi'],
//         director: 'Stuart Gordon',
//         actors: ['Jeffrey Combs', 'Barbara Crampton', 'Ted Sorel'],
//     },
//     {
//         index: 9,
//         name: 'The Dunwich Horror',
//         rating: 5.4,
//         ratingCount: 4900,
//         releaseDate: 1970,
//         description: `
//         Wilbur Whateley travels to the Arkham Miskatonic University 
//         to borrow the legendary Necronomicon. But, little 
//         does anyone know, Whateley isn't quite human...`,
//         genres: ['Horror'],
//         director: 'Daniel Haller',
//         actors: ['Sandra Dee', 'Dean Stockwell', 'Ed Begley'],
//     },
// ]


fetch('obj.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })