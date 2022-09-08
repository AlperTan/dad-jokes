const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4e7a9ff061msh2425154e29f551fp1a45abjsn7f4800e70cba",
    "X-RapidAPI-Host": "daddyjokes.p.rapidapi.com",
  },
};
function getJoke() {
  fetch("https://daddyjokes.p.rapidapi.com/random", options)
    .then((response) => response.json())
    .then(function (json) {
      console.log("parsed json", json.joke);
      const jokeEl = document.getElementById("joke");

      jokeEl.innerHTML = json.joke;
    })
    .catch((err) => console.error(err));
}

const jokeBtn = document.getElementById("btn");

const disableGenerateButton = () => {
  btn.setAttribute("disabled", "disabled");
  btn.classList.add("cursor-not-allowed", "opacity-50");
};

const enableGenerateButton = () => {
  btn.removeAttribute("disabled");
  btn.classList.remove("cursor-not-allowed", "opacity-50");
};

jokeBtn.addEventListener("click", function () {
  disableGenerateButton();
  getJoke();
  enableGenerateButton();
});

window.onload = function () {
  getJoke();
};
