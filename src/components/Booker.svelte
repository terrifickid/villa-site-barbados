<script>
  export let data;
  import { onMount } from "svelte";
  import axios from "axios";
  import { goto } from "$app/navigation";
  import Spinner from "../components/Spinner.svelte";
  let guests = 2;
  let isChecking = false;
  let checkInDate = getNextFriday();
  let checkOutDate = getNextMondayAfterFriday();
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
  function formatPrice(price, currency) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(price);
  }
  async function checkAvailability() {
    isChecking = true;
    const apiUrl = "https://vapi-le6wug7tlq-vp.a.run.app/quote";
    try {
      const response = await axios.post(apiUrl, {
        guestsCount: guests,
        listingId: data._id,
        checkInDateLocalized: checkInDate,
        checkOutDateLocalized: checkOutDate,
      });
      console.log("Checkng avail", response.data._id);

      goto("/book/" + data._id + "/" + response.data._id);
    } catch (error) {
      console.error("checkAvailablity", error);
      alert(error.response.data.error.error.message);
      isChecking = false;
    }
  }
  onMount(async () => {
    let urlParams = new URLSearchParams(window.location.search);
    const checkInParam = urlParams.get("checkIn");
    const checkOutParam = urlParams.get("checkOut");
    console.log("param", checkOutParam);
    if (checkInParam) {
      var i = new Date(checkInParam);
      checkInDate = i.toISOString().split("T")[0];
    }
    if (checkOutParam) {
      var o = new Date(checkOutParam);
      checkOutDate = o.toISOString().split("T")[0];
    }
  });
</script>

<div
  class="bg-white border-t border-black fixed lg:hidden bottom-0 left-0 right-0 frame py-4 grid grid-cols-2 flex items-center z-50"
>
  <div>
    <p>{data.nickname}</p>
    <span class="font-medium"
      >{formatPrice(data.prices.basePrice, data.prices.currency)}</span
    > / night
  </div>
  <div class="text-right">
    <button
      on:click={checkAvailability}
      type="submit"
      class="text-base w-auto cursor-pointer items-center justify-center lg:px-12 px-12 py-4 text-center duration-200 bg-black text-white rounded-full focus:outline-none hover:bg-black ring-white hover:ring-bound ring-1 hover:text-white hover:bg-black"
    >
      Reserve
    </button>
  </div>
</div>
<div class="hidden lg:block">
  <div class="border border-black p-6 rounded-xl shadow sticky top-32">
    <p>{data.nickname}</p>
    <p class="font-medium pb-4">
      {formatPrice(data.prices.basePrice, data.prices.currency)} / night
    </p>
    <div class="grid grid-cols-1">
      <div class="mb-4">
        <label class="font-medium text-sm">Check In</label>
        <input
          class="text-white bg-black rounded-full border-0 ring-gray-300 ring-1 focus:ring-bound focus:ring-2 mt-0.5 py-1.5 pl-3 w-full sm:text-sm sm:leading-6"
          type="date"
          style=" color-scheme: dark;"
          bind:value={checkInDate}
        />
      </div>
      <div>
        <label class="font-medium text-sm">Check Out</label>
        <input
          class="text-white bg-black rounded-full border-0 ring-gray-300 ring-1 focus:ring-bound focus:ring-2 mt-0.5 py-1.5 pl-3 w-full sm:text-sm sm:leading-6"
          type="date"
          style=" color-scheme: dark;"
          bind:value={checkOutDate}
        />
      </div>
    </div>
    <p class="mt-4"><label class="font-medium text-sm">Guests</label></p>

    <div class="flex items-center grid grid-cols-5">
      <div class="mr-5 col-span-2">{guests}</div>

      <button
        class="mr-2"
        on:click={() => {
          if (guests < data.accommodates) guests++;
        }}
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
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>

      <button
        on:click={() => {
          if (guests > 1) guests--;
        }}
      >
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
            d="M19.5 12h-15"
          />
        </svg>
      </button>
    </div>
    <hr class="mt-6 mb-4" />
    <div>
      <button
        on:click={checkAvailability}
        type="submit"
        class="text-lg my-5 inline-flex w-full cursor-pointer items-center justify-center w-auto lg:px-12 px-6 py-4 text-center duration-200 bg-black text-white rounded-full focus:outline-none hover:bg-black ring-white hover:ring-bound ring-1 hover:text-white hover:bg-black"
      >
        {#if isChecking}
          <Spinner />
        {:else}
          Reserve
        {/if}
      </button>
    </div>
  </div>
</div>
