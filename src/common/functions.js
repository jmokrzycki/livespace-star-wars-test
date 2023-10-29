export const fetchData = async (url) => {
    const data = await fetch(url);
    const json = await data.json();
    
    return json;
};

export const fetchArrayData = async (urlsList) => {
    if (!urlsList) return [];
    
    const fetchFunctions = urlsList.map((url) => fetch(url));
    const responses = await Promise.all(fetchFunctions);
    const jsons = await Promise.all(
      responses.map((response) => response.json())
    );

    return jsons;
};
