const edv_wishlist2 = [
    {
    movie: "Triangle of sadness"
}
];

// const response = await(fetch('https://www.filmvandaag.nl/includes/autocomplete-new.php?term=evil dead rise'));
// let result = await response.json();
// movies = result.filter( item => item.category === 'movie');

// document.querySelector("#qcomplete").setRangeText('evil dead rise');
// document.querySelector("#qcomplete").dispatchEvent(new Event('blur'));
// document.querySelector("#qform > button.glass").click();

// window.location.assign('https://www.filmvandaag.nl/zoek?zoekterm=evil+dead+rise&veld=titel');

// window.location.assign('https://www.filmvandaag.nl/zoek?zoekterm=evil&veld=titel');

function search(movie) {
    console.log(`Searching ${movie}`)
    let searchButton = document.querySelector("#search-sidebar > form > div:nth-child(1) > div.body > label:nth-child(2) > input[type=radio]");
    console.log(document.querySelector("#search-sidebar > form"));
    searchButton.click();
    edv_searchInput = document.querySelector("#search-sidebar > form > div:nth-child(3) > input");
    edv_searchInput.value = movie;
    document.querySelector("#search-sidebar > form > div:nth-child(3) > fieldset > label:nth-child(1) > input[type=radio]").click();
    document.querySelector("#search-sidebar > form > div:nth-child(3) > fieldset > label:nth-child(2) > input[type=radio]").click();
}

function addToWatchList(movie) {
    movies = document.querySelectorAll('#fv-search > div.search.main > div.search-results > ul > li[class="item is-movie"]');

    if (movies.length === 0) {
        console.log('Movie not found');
        return;
    } else if (movies.length > 1) {
        console.log('More than 1 movie found');
        return;
    } else if (!movies[0].innerText.toLowerCase().includes(movie.toLowerCase())) {
        console.log('Result does not contain movie');
        return;
    }
    
    edv_watchlistButton = document.querySelector("#fv-search > div.search.main > div.search-results > ul > li > div.rating > div > div:nth-child(2) > div");
    
    if (edv_watchlistButton.classList.contains('active')) {
        console.log('Movie already in watchlist');
    } else {
        edv_watchlistButton.click();
        console.log('Movie added to watchlist');
    }
}

const timer = ms => new Promise(res => setTimeout(res, ms))

async function load() {
    for (const item of edv_wishlist2) {
        search(item.movie);
        await timer(2000);
        addToWatchList(item.movie);
        await timer(5000);
    };
}

location.href = "https://www.filmvandaag.nl/zoek?q="; // go to search page with filters
load();

// const button = document.querySelector("#filmpagina > div.filmpagina-info.movie > div:nth-child(1) > div.filmpagina-info-cover > div.show-desktop > div.watchlist > div.grid > div:nth-child(2) > button")
// if (button.classList.contains('inwatchlist')) {
//     button.click();
//     console.log(`Added ${movie}`);
// }

