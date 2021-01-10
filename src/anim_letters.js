document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector("#welcome ul");
  let sentence = "Bonjour!";

  for (let i = 0; i < sentence.length; i++) {
    el.innerHTML += `<li>${sentence[i]}</li>`;
  }
});
