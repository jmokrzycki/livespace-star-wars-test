export const fetchData = async (address) => {
    const data = await fetch(address);
    const json = await data.json();
    return json;
};