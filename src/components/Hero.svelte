<script>
  import { goto } from "$app/navigation";
  import Spinner from "../components/Spinner.svelte";
  import DateOption from "../components/DateOption.svelte";
  import KeywordSearch from "../components/KeywordSearch.svelte";
  let searching = false;
  let search = {
    checkIn: getNextFriday(),
    checkOut: getNextMondayAfterFriday(),
  };
  function getNextFriday() {
    const today = new Date();
    const daysUntilFriday = (5 - today.getDay() + 7) % 7; // Calculate days until the next Friday
    const nextFriday = new Date(today);
    nextFriday.setDate(today.getDate() + daysUntilFriday);

    // Format the date as 'YYYY-MM-DD' for the input element
    return nextFriday.toISOString().split("T")[0];
  }
  function getNextMondayAfterFriday() {
    const nextFriday = new Date(getNextFriday());
    const nextMonday = new Date(nextFriday);
    nextMonday.setDate(nextFriday.getDate() + 3); // Add 3 days to get the Monday after the next Friday

    // Format the date as 'YYYY-MM-DD' for the input element
    return nextMonday.toISOString().split("T")[0];
  }
  function handleSubmit() {
    console.log(search);
    event.preventDefault();
    searching = true; // Toggle the variable
    let queryParams = new URLSearchParams(search).toString();
    let searchUrl = `/search?${queryParams}`;
    goto(searchUrl, false);
  }

  function checkOut() {
    document.getElementById("checkOut").focus();
    document.getElementById("checkOut").select();
  }
  export let data;
  console.log(data);
</script>

<KeywordSearch />
<section
  class="bg-black overflow-hidden text-white py-24 bg-cover bg-center shadow-md bg-center bg-cover"
  style="background-image: url(https://blog.villabound.com/wp-content/themes/caribound/assets/7flntut11.jpg)"
>
  <form on:submit={handleSubmit}>
    <div>
      <div class="relative frame">
        <div
          class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 flex items-center"
        >
          <div
            class="text-left p-7 mt-24 rounded-lg"
            style="background: rgba(0,0,0,0.65);"
          >
            <div>
              <p class="v_heading mt-3">Find a place to stay.</p>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-10">
              <div>
                <label for="location" class="flex text-sm leading-6"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  &nbsp;Location</label
                >
                <select
                  bind:value={search.country}
                  name="location"
                  class="bg-black text-white mt-2 block w-full rounded-full border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-bound sm:text-sm sm:leading-6"
                >
                  {#each data.countries as country}
                    <option value={country}>{country}</option>
                  {/each}
                </select>
              </div>

              <div>
                <label for="location" class="flex text-sm leading-6"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  &nbsp;Guests</label
                >
                <select
                  bind:value={search.minOccupancy}
                  name="guests"
                  class="bg-black text-white mt-2 block w-full rounded-full border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-bound sm:text-sm sm:leading-6"
                >
                  <option value="1">1</option>
                  <option value="2" selected>2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

              <div>
                <label for="location" class="flex text-sm leading-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>&nbsp;Check In</label
                >
                <input
                  bind:value={search.checkIn}
                  class="text-white bg-black rounded-full border-0 ring-gray-300 ring-1 focus:ring-bound focus:ring-2 mt-2 py-1.5 pl-3 w-full sm:text-sm sm:leading-6"
                  type="date"
                  style=" color-scheme: dark;"
                />
              </div>

              <div>
                <label for="location" class="flex text-sm leading-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>&nbsp;Check Out</label
                >

                <input
                  id="checkOut"
                  bind:value={search.checkOut}
                  class="text-white bg-black rounded-full border-0 ring-gray-300 ring-1 focus:ring-bound focus:ring-2 mt-2 py-1.5 pl-3 w-full sm:text-sm sm:leading-6"
                  type="date"
                  style=" color-scheme: dark;"
                />
              </div>

              <div>
                <button
                  type="submit"
                  class="my-5 inline-flex cursor-pointer items-center justify-center w-auto lg:px-12 px-6 py-4 text-center duration-200 bg-black text-white rounded-full focus:outline-none hover:bg-black ring-white hover:ring-bound ring-1 hover:text-white hover:bg-black"
                >
                  {#if searching}
                    <Spinner />
                  {:else}
                    Search
                  {/if}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</section>
