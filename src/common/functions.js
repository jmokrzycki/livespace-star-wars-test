export const fetchData = async (url) => {
    const response = await fetch(url);

    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      return null;
    }
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
