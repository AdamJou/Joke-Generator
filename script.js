const jokeP = document.getElementById("joke");
const btn = document.getElementById("generate");

btn.addEventListener("click", update);

async function update() {
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const data = await response.json();
    if (data && data.joke) {
      jokeP.textContent = data.joke;
    } else {
      throw new Error("Unable to get the joke!");
    }
  } catch (error) {
    console.error(error.message);
    jokeP.textContent = "An error has occured, try again later!";
  }
}
