function toTitleCase(str) {
  return str.toLowerCase().replace(/\b(\w)/g, (match) => match.toUpperCase());
}

document.querySelector(".flavors").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const userInput = event.target.value.trim();
    const flavors = userInput.split(",").map((flavor) => flavor.trim());

    if (!userInput) {
      alert("Please enter at least one flavor!");
      return;
    }

    const container = document.querySelector(".flavor-container");
    const flavorCounts = {};

    for (let flavor of flavors) {
      if (!flavor || !isNaN(flavor)) {
        alert("Please enter valid flavor names (not numbers)!");
        return;
      }

      flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
    }

    container.innerHTML = Object.entries(flavorCounts)
      .map(
        ([flavor, count]) =>
          `<p class="flavor-item">${toTitleCase(flavor)}: ${
            count === 1 ? count + " serving" : count + " servings"
          }</p>`
      )
      .join("");

    document.querySelector(".flavors").value = "";
  }
});
