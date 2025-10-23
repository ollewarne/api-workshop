const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
            },
        }
    try {
        const res = await fetch('https://icanhazdadjoke.com/', config);
        if(!res.ok) throw Error(`Ajabaja! ${res.status}`);
        const data = await res.json()
        console.log(data)
        jokeElement.innerHTML = data.joke
    } catch (error) {
        console.log(error)
    }
};

jokeBtn.addEventListener("click", generateJoke);
