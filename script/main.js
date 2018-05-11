$(document).ready(function(){

    Persons = [
        {
            name: "John",
            surname : "Doe",
            favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
            age: 25,
            myPhoto: "images/boy1.jpg",	
            likes: 0
        },
        {
            "name": "Lisa",
            surname : "Cole",
            favoritePerformers: ["Celine Dion", "Mariah Carey", "Meryl Strip"],
            age: 31,
            myPhoto: "images/girl1.jpg",	
            likes: 0
        },
        {
            "name": "Max",
            surname : "Kev",
            favoritePerformers: ["Justin Bieber", "Ariana Grande", "Miles Davis"],
            age: 21,
            myPhoto: "images/boy2.jpg",	
            likes: 0
        },
        {
            "name": "Jenna",
            surname : "Gate",
            favoritePerformers: ["John Mayer", "Dave Chapelle", "Kanye West"],
            age: 28,
            myPhoto: "images/girl2.jpg",	
            likes: 0
        },
    ];

    // Creating content for class="card"
    for (let i = 0; i < Persons.length; i++) {
        $(`.card-img:eq(${i})`).append(`<img src=\"${Persons[i].myPhoto}\">`)
        $(`.card-text:eq(${i})`).append(`<p>Name: ${Persons[i].name}</p><p>Surname: ${Persons[i].surname}</p><p>Age : ${Persons[i].age}</p>`)
        $(`.like:eq(${i})`).on('click', function(){ //Adding likes on click function
            Persons[i].likes += 1
            $(`.like-count:eq(${i})`).html(Persons[i].likes)
        })
    }
    // Sorting an array by ascending order function
    function sortAscending(array, key) {
        return array.sort(function(a, b) {
            let x = a[key]; let y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
    // Sorting an array by Descending order function
    function sortDescending(array, key) {
        return array.sort(function(a, b) {
            let x = a[key]; let y = b[key];
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });
    }
    // Sorting Persons array using 2 predefined functions
    function SortPersons(order) {
        if (order == "Desc") {
        Persons = sortDescending(Persons, 'likes')
        } else if (order == "Asc") {
        Persons = sortAscending(Persons, 'likes')    
        }
        // Displaying cards according to sorted Persons array
        for (let i = 0; i < Persons.length; i++) {
            $(`.card-img:eq(${i})`).html(`<img src=\"${Persons[i].myPhoto}\">`)
            $(`.card-text:eq(${i})`).html(`<p>Name: ${Persons[i].name}</p><p>Surname: ${Persons[i].surname}</p><p>Age : ${Persons[i].age}</p>`)
            $(`.like-count:eq(${i})`).html(`<h3>${Persons[i].likes}</h3>`)
        }
    }
    // Calling functions on click with an argument that will determine the ascending or descending order.
    $('#sortDesc').click(function () {
        SortPersons("Desc")
    })
    $('#sortAsc').click(function () {
        SortPersons("Asc")
    })
})


