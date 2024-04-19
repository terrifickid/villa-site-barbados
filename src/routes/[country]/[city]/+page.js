import axios from "axios";

export async function load({ url }) {
  var r = url.pathname.split("/");
  var destination = r[r.length - 1];
  console.log("Getting Destination...", destination);
  const apiUrl = "https://vapi-le6wug7tlq-vp.a.run.app/search";
  try {
    const response = await axios.post(apiUrl, {
      query: "listings?country=" + destination + "&limit=100",
    });
    response.data.destination = destination;
    return response.data;
  } catch (error) {
    console.error(error);
    return {
      results: [],
    };
  }
}
//?country=Anguilla&minOccupancy=1&checkIn=2023-10-01&checkOut=2023-10-03
