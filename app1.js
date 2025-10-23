// get the html element we want to use from html (button, textbox)
//
// call the function
// 
// create async function
// create variable for config (headers: accept json)
// create try block to fetch from api with config
// inside try block we await answer from api
// if we get a response check response is ok if not throw error
// if it is ok, await to make the response json
// save response json in data variable
// extract the data
// print the data to the page
// catch any error and print it to the console
//
// add event listeners
const joke = document.getElementById("joke");

const jokeButton = document.getElementById("jokeBtn");


generateJoke();


async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };
    try {
        const response = await fetch('https://icanhazdadjoke.com/', config);
        if (!response.ok) {
            throw Error(console.log("throw error " + response.status));
        }
        const data = await response.json();
        console.log(data);
        joke.innerHTML = data.joke;
    } catch (error) {
        console.log("catch error " + error);
    };
};

jokeButton.addEventListener('click', generateJoke);
