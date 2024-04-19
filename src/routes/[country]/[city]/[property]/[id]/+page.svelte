<script>
  export let data;
  let more = true;
  import _ from "lodash";
  import Booker from "$components/Booker.svelte";

  console.log(data);

  function formatPrice(price, currency) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(price);
  }

  function getMainImage() {
    var p = "/p.svg";
    if (!data?.pictures.length) return p;
    if (data?.pictures[0]?.original) p = data?.pictures[0]?.original;
    if (data?.picture?.large) p = data?.picture?.large;
    return p;
  }
</script>

<section class=" center pt-32 md:pt-40 pb-6">
  <div class="">
    <div class="items-center w-full frame">
      <div class=" grid grid-cols-1 flex items-center">
        <div>
          <p class="v_heading">
            {data.nickname}
          </p>
        </div>
        <div class=" justify-end hidden">
          <button
            type="button"
            class="p-5 flex items-center text-lg md:p-6 md:px-8 md:text-2xl text-center text-white duration-200 bg-black font-medium rounded-full text-base focus:outline-none hover:bg-white ring-1 ring-white hover:ring-bound hover:text-black"
            ><div style="position:relative" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
              />
            </svg>
            Make a Booking
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<p class="mb-1" />

<section class="bg-white text-black frame">
  <div class=" md:text-2xl lg:text-3xl">
    <div class="grid grid-cols-3 lg:grid-cols-3 gap-4">
      <div class="mb-4">
        <p>Guests<br />{data.accommodates}</p>
      </div>

      <div>
        <p>Beds<br />{data.bedrooms}</p>
      </div>

      <div>
        <p>Baths<br />{data.bathrooms}</p>
      </div>

      <!-- Continue displaying other properties -->
    </div>
  </div>
</section>

<div class="frame hidden">
  <button
    type="button"
    class=" p-5 flex items-center text-lg md:p-6 md:px-8 md:text-2xl text-center text-white duration-200 bg-black font-medium rounded-full text-base focus:outline-none hover:bg-white ring-1 ring-white hover:ring-bound hover:text-black"
    ><div style="position:relative" />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 mr-2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
      />
    </svg>
    Make a Booking
  </button>
</div>

<section class="frame my-6">
  <div>
    <img class="w-full rounded" src={getMainImage()} />
  </div>
</section>

{#if _.get(data, "publicDescription.summary")}
  <section class="frame bg-white text-black text-xl py-12">
    <div>
      <div class="grid grid-cols-1 gap-0 lg:grid-cols-3 md:gap-12">
        <div class="lg:col-span-2">
          <p class="mb-2 font-medium">Description</p>
          <p class:line-clamp-6={more}>{data.publicDescription.summary}</p>
          <button on:click={() => (more = !more)} class="pt-2 text-md underline"
            >Show More</button
          >
          <hr class="my-12" />
          {#if data.amenities.length}
            <ul class=" list-none grid md:grid-cols-2 gap-8 mb-24">
              {#each data.amenities as amenity}
                <li>{amenity}</li>
              {/each}
            </ul>
          {/if}

          <section class="grid md:grid-cols-1 gap-4 md:gap-6">
            {#each data.pictures as picture}
              <div
                class="picture bg-cover bg-center aspect-square rounded"
                style="width: 100%; background-image: url({picture.original})"
              />
            {/each}
          </section>
        </div>
        <Booker {data} />
      </div>
    </div>
  </section>
{/if}
