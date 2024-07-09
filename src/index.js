function displayPoem(response) {
  
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });

  let submitButton = document.querySelector("#submit-button");
  submitButton.removeAttribute("disabled");
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
