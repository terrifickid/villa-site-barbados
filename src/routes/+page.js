import axios from "axios";
let cities = {
  results: [],
};
export async function load({ page }) {
  const apiUrl = "https://vapi-le6wug7tlq-vp.a.run.app/search";
  const queries = [
    "listings/cities?skip=0&limit=100",
    "listings/cities?skip=100&limit=100",
    "listings/cities?skip=200&limit=100",
  ];

  try {
    const responsePromises = queries.map((query) =>
      axios.post(apiUrl, {
        query,
      })
    );
    const responses = await Promise.all(responsePromises);
    console.log("res", responses);
    const combinedData = responses.map((response) => response.data.results);
    const allCities = Object.values(combinedData).reduce(
      (acc, data) => [...acc, ...data],
      []
    );
    const uniqueCountries = allCities.reduce((acc, cityObj) => {
      if (!acc.includes(cityObj.country)) {
        acc.push(cityObj.country);
      }
      return acc;
    }, []);
    var sorted = uniqueCountries.sort();
    return { countries: sorted };
  } catch (error) {
    console.error(error);
    return cities; // You need to define 'cities' or handle the error case appropriately
  }
}
