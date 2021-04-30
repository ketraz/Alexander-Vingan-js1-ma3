var url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=aefc99891a514d9a9e3bdd2287715bab";

var resultsContainer = document.querySelector(".results")


async function getFacts() {

    const response = await fetch(url);

    const result = await response.json();

    const gameList = result.results;

    resultsContainer.innerHTML = "";

    for (var i = 0; i < gameList.length; i++) {

        if (i === 8) {
            break
        }

        var names = gameList[i].name;

        var ratings = gameList[i].rating;

        var tags = gameList[i].tags.length;



        resultsContainer.innerHTML += `<div class="result">${names} ${ratings} ${tags}</div>`;


    }

}

getFacts();