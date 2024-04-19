import axios from "axios";
export async function load({ params }) {
  const apiUrl = "https://vapi-le6wug7tlq-vp.a.run.app/search";
  try {
    var data = await Promise.all([
      axios.post(apiUrl, {
        query: "reservations/quotes/" + params.bid,
      }),
      axios.post(apiUrl, {
        query: "listings/" + params.pid,
      }),
    ]);
    return { data };
  } catch (error) {
    console.error("Couldnt find listing ID", error);
    return {
      results: [],
    };
  }
}
//pk_live_ifI6zGqmmINgBCUQmIKeZqIT
