async function getAllCharacters() {
    const initialResponse = await fetch("https://swapi.dev/api/people/");
    const initialDataJson = await initialResponse.json();
    const pages = Math.ceil(
      initialDataJson.count / initialDataJson.results.length
    );

    const fetchFunctions = [];
    for (let i = 2; i <= pages; i++) {
      fetchFunctions.push(fetch(`https://swapi.dev/api/people/?page=${i}`));
    }

    const responses = await Promise.all(fetchFunctions);
    const data = await Promise.all(
      responses.map((response) => response.json())
    );

    const allCharacters = data.reduce(
      (accumulator, currentValue) => [...accumulator, ...currentValue.results],
      initialDataJson.results
    );

    return allCharacters;
}

export default getAllCharacters;