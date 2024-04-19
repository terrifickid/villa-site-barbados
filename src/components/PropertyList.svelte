<script>
  import { onMount } from "svelte";
  import _ from "lodash";
  export let data;
  let search = null;
  function formatPrice(price, currency) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(price);
  }
  function getMainImage(item) {
    var p = "/p.svg";
    if (!item.pictures.length) return p;
    if (item?.pictures[0]?.original) p = item?.pictures[0]?.original;
    if (item?.picture?.large) p = item?.picture?.large;
    return p;
  }
  onMount(() => {
    search = window.location.search;
  });
</script>

<div
  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
>
  {#each data.results as item}
    <a
      href={"/" +
        _.kebabCase(_.get(item, "address.country", "country")) +
        "/" +
        _.kebabCase(_.get(item, "address.city", "city")) +
        "/" +
        (_.get(item, "title") ? _.kebabCase(item.title) : "property") +
        "/" +
        item._id +
        search}
      class="group mb-6"
    >
      <article>
        <div
          class="aspect-square object-cover bg-center bg-cover h-full rounded"
          style="background-image: url({getMainImage(item)})"
        />

        <div
          class="flex flex-col items-start justify-between flex-1 w-full mt-3"
        >
          <div class="w-full flex flex-col items-start justify-center">
            <p class="text-regent-900 font-medium lg:text-xl text-lg">
              {item.nickname}
            </p>
            <p class="mb-1">
              {formatPrice(item.prices.basePrice, item.prices.currency)}
              Per Night
            </p>

            <div class="grid grid-cols-2 w-full">
              <p class="text-sm">
                {item.address.city}
              </p>
              <p class="text-right text-sm mb-1">
                {item.bedrooms} Beds
                {item.bathrooms} Bath
              </p>
            </div>
          </div>
        </div>
      </article>
    </a>
  {/each}
</div>
