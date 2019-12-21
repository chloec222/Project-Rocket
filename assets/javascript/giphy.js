(function(){
var giphyButton = document.querySelector('#giphyButton');
giphyButton.addEventListener('click', handleSubmit);


function handleSubmit(event) {
    console.log(`[DEBUG] test this is called`)
    // prevent page from reloading when form is submitted
    event.preventDefault();
    // get the value of the input field
    var input = document.querySelector('#searchInput').value;
    // remove whitespace from the input
    var searchQuery = input.trim();
    // print `searchQuery` to the console
    console.log(searchQuery);
    fetchResults(searchQuery);
}

//results shown in console & opens list in new tab:
function fetchResults(searchQuery) {
    var endpoint = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&&limit=10&rating=g&lang=en`;
    console.log(endpoint);
}

//results directly in console:
function fetchResults(searchQuery) {
    var endpoint = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&&limit=10&rating=g&lang=en`;


fetch(endpoint)
.then(function (response) {
return response.json();
})
.then(function (data) {
    console.log(data);
})
.catch(function () {
console.log('An error occurred');
})
}

//displays results on page:
function fetchResults(searchQuery) {
    var endpoint = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&&limit=10&rating=g&lang=en`;

    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        console.log(`giphy results ${JSON.stringify(data)}`)
    var results = data.data;
    displayResults(results);
});
}


function displayResults(results) {
    console.log(results);
    var searchResults = document.querySelector('#giphyResults');
    // Remove all child elements
    searchResults.innerHTML = "";
    // Loop over results array
    results.forEach(result => {
        //result here represents each object in our array
        var url = encodeURI(`https://api.giphy.com/v1/gifs/search?q=${result.title}&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&&limit=10&rating=g&lang=en`);
    searchResults.insertAdjacentHTML('beforeend',
        `<div class="resultItems">
        <h3 class="resultItems-title">
            <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
        </h3>
        <span class="resultItems-snippet">${result.snippet}</span><br>
        <a href="${url}" class="resultItems-link" target="_blank" rel="noopener">${url}</a>
        </div>`
        );
    });
    }


    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function (response) {

    //     //response is data returned from the server if the api exists
    //     console.log(response)

    //     //response.data is an array that has all the giphy images
    //     for (let index = 0; index < response.data.length; index++) {
    //         //create dynamic img tag for the giphy api
    //         var img = $("<img>")

    //         //assigns the src from the link of the giphy image url
    //         img.attr("src", response.data[index].images.original.url)

    //         //appends it the giphy section div after the img tag is formed
    //         $("#giphyResults").append(img)
    //     }
    // })
})();






