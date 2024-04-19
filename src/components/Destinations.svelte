<script>
  export let data;
</script>

<section>
  <div class="frame py-24">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
      <div>
        <span
          class="text-base items-center inline-flex uppercase tracking-wide font-medium text-bound"
        >
          Destinations
        </span>
        <p class="mt-16 text-2xl font-normal lg:text-4xl text-regent-900">
          Explore exclusive properties in popular destinations.
        </p>
      </div>
      <div>
        <p class="text-slate-500 text-lg lg:text-xl tracking-wide">
          Embark on a journey of discovery as you delve into our curated
          selection of exclusive properties, all nestled within the most
          sought-after and popular destinations around the world.
        </p>
      </div>
    </div>
  </div>
  <div class="frame" x-data="" x-tabs="">
    <div class="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {#each data.countries as country}
        <div>
          <h3>
            <a class="hover:underline" href={"/" + country}
              ><span class="text-lg text-medium font-mono">{country}</span>
            </a>
          </h3>
        </div>
      {/each}
    </div>
  </div>
</section>
