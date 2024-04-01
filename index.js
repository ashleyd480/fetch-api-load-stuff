//=================JOKES JOKES JOKES=========
// Let's get some jokes because we need to turn that frown upside down.

const jokesURL = "https://official-joke-api.appspot.com/random_ten";

function loadJokes() {
  fetch(jokesURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      makeMeLaugh(data);
    })
    .catch((error) => {
      console.log("Crtical error", error);
    });
}

//Using DOM to get loadJokes button and the jokesSection div from my HTML
let loadJokesButton = document.getElementById("loadJokes");
console.dir(loadJokesButton);

let jokesSection = document.querySelector(".jokes");
console.dir(jokesSection);

//now we define what does makeMeLaugh function when called
//Essentially, we are tying the newJoke element to the setup value in the API data we've received- iterating through each jokeItem with forEach and pulling the setup value.
//We want to filter out those less than
//We also want to use if, else to check if the response includes a image and if so show the image, otherwise simply spit out text. We do so by checking if img exists

function makeMeLaugh(data) {
  console.log("it's working");
  let slicedData = data.slice(0, 100);
  slicedData.forEach((jokeItem) => {
    if (jokeItem.download_url) {
      const jokeImage = document.createElement("img");
      jokeImage.src = jokeItem.download_url;
      jokesSection.appendChild(jokeImage);
    } else {
      const newJokeText = document.createElement("p");
      newJokeText.textContent = jokeItem.setup + " " + jokeItem.punchline;
      newJokeText.classList.add("textStyle");
      jokesSection.appendChild(newJokeText);
      const deleteJoke = document.createElement("button");
      deleteJoke.textContent = "Delete";
      jokesSection.appendChild(deleteJoke);
      deleteJoke.addEventListener("click", function () {
        newJokeText.remove(); deleteJoke.remove();
      });
    }
  });
}

loadJokesButton.addEventListener("click", loadJokes);

//=================CATS RULE=========

const catURL = "https://catfact.ninja/facts?limit=10";

//Using DOM to get loadCatFacts button and the jokesSection div from my HTML
let loadCatsButton = document.getElementById("loadCatFacts");

let catsSection = document.querySelector(".catFacts");

function loadCats() {
  fetch(catURL)
    .then((response) => {
      console.log("getting it right meow");
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log("purrfect");
      makeMePurr(data);
    })
    .catch((error) => {
      console.log("Crtical error", error);
    });
}

loadCatsButton.addEventListener("click", loadCats);

//logging cat facts- cat facts are encased in objects under data and within each object there is an array where the facts are contained. I don't see any images, I commented out code to check that!

function makeMePurr(data) {
  console.log("meow-tastic");
  let slicedData = data.data.slice(0, 100);
  slicedData.forEach((catItem) => {
    const newCatText = document.createElement("p");
    newCatText.textContent = catItem.fact;
    newCatText.classList.add("textStyle");
    catsSection.appendChild(newCatText);
    const deleteCat = document.createElement("button");
    deleteCat.textContent = "Delete";
    catsSection.appendChild(deleteCat);
    deleteCat.addEventListener("click", function () {
      newCatText.remove(); deleteCat.remove();
    })
  });
}

//=================MEMES MEMES BLAH=========

const memeURL = "https://api.imgflip.com/get_memes";

//Using DOM to get loadCatFacts button and the jokesSection div from my HTML
let loadMemesButton = document.getElementById("loadMemes");

let memesSection = document.querySelector(".memeImages");

function loadMemes() {
  fetch(memeURL)
    .then((response) => {
      console.log("loading your meme");
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log("yer meme is ready");
      makeMemes(data);
    })
    .catch((error) => {
      console.log("Crtical error", error);
    });
}

loadMemesButton.addEventListener("click", loadMemes);

function makeMemes(data) {
  let slicedData = data.data.memes.slice(0, 100);
  slicedData.forEach((memeItem) => {
    console.log("hello");
    const memeImage = document.createElement("img");
    memeImage.src = memeItem.url;
    memesSection.appendChild(memeImage);
  });
}

//Since I added 3 different divs, there was not the issue of clearing each section, however if I only had one div for all the API conent to feed to then I coudl just use this line at beginngin fo my function    emptySection.innerHTML = ''; to clear previous content
