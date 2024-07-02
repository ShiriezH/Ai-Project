function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = "9f87bf3a718647b2o7b016cf9t1f3ad8";
let context =
  "be polite and provide a very short answer. make sure to pick one";
let prompt = "what's the best cuisine in the world?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);
