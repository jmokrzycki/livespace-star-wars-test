import { swapiBaseUrl } from "./baseUrls";

async function getAllCharactersSortedByName() {
    const initialResponse = await fetch(`${swapiBaseUrl}/people/`);
    const initialDataJson = await initialResponse.json();
    const pages = Math.ceil(
      initialDataJson.count / initialDataJson.results.length
    );

    const fetchFunctions = [];
    for (let i = 2; i <= pages; i++) {
      fetchFunctions.push(fetch(`${swapiBaseUrl}/people/?page=${i}`));
    }

    const responses = await Promise.all(fetchFunctions);
    const data = await Promise.all(
      responses.map((response) => response.json())
    );

    const allCharacters = data.reduce(
      (accumulator, currentValue) => [...accumulator, ...currentValue.results],
      initialDataJson.results
    );

    const charactersSortedByName = allCharacters.sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    return charactersSortedByName;
}

export default getAllCharactersSortedByName;
