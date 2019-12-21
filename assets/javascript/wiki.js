(function(){
    var wikiButton = document.querySelector('#wikiButton');
    wikiButton.addEventListener('click', handleSubmit);


function handleSubmit(event) {
    // prevent page from reloading when form is submitted
    event.preventDefault();
    // get the value of the input field
    var input = document.querySelector('.searchForm-input').value;
    // remove whitespace from the input
    var searchQuery = input.trim();
    // print `searchQuery` to the console
    console.log(searchQuery);
    fetchResults(searchQuery);
}


//results shown in console & opens list in new tab:
function fetchResults(searchQuery) {
    var endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
    console.log(endpoint);
}


//results directly in console:
function fetchResults(searchQuery) {
    var endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;

//     fetch(endpoint)
//     .then(response => response.json())
//     .then(data => {
//     console.log(data);
//     })
//     .catch(() => console.log('An error occurred'));
// }


//the old way of doing fetch:
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
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;

    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
    var results = data.query.search;
    displayResults(results);
});
}


function displayResults(results) {
    console.log(results);
    var searchResults = document.querySelector('#wikiResults');
    // Remove all child elements
    searchResults.innerHTML = "";
    // Loop over results array
    results.forEach(result => {
        //result here represents each object in our array
        var url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);
    searchResults.insertAdjacentHTML('beforeend',
        `<div class="resultItem">
        <h3 class="resultItem-title">
            <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
        </h3>
        <span class="resultItem-snippet">${result.snippet}</span><br>
        <a href="${url}" class="resultItem-link" target="_blank" rel="noopener">${url}</a>
        </div>`
        );
    });
}

})();

