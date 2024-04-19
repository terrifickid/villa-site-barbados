import axios from "axios";
export async function load({ params }) {
  const apiUrl = "https://vapi-le6wug7tlq-vp.a.run.app/keyword";
  try {
    const response = await axios.post(apiUrl, {
      search: params.keyword,
    });
    return { results: response.data, keyword: params.keyword };
  } catch (error) {
    console.error(error);
    return {
      results: [],
    };
  }
}
//?country=Anguilla&minOccupancy=1&checkIn=2023-10-01&checkOut=2023-10-03
