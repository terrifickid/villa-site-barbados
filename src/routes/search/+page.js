import axios from "axios";
export async function load({ url }) {
  var searchString = url.search + "&tags=iCal";
  console.log("Searching...", searchString);
  const apiUrl = "https://vapi-le6wug7tlq-vp.a.run.app/search";
  try {
    const response = await axios.post(apiUrl, {
      query: "listings" + searchString,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return {
      results: [],
    };
  }
}
//?country=Anguilla&minOccupancy=1&checkIn=2023-10-01&checkOut=2023-10-03
