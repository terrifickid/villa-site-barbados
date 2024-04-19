<script>
  export let data;
  import PropertyList from "$components/PropertyList.svelte";
  console.log(data);
</script>

<section>
  <div class="frame py-12 pt-40">
    <p
      class="mb-12 text-2xl md:text-5xl tracking-tighter font-medium text-regent-900"
    >
      {decodeURI(data.destination)} ({data.results.length})
    </p>
    <PropertyList {data} />
  </div>
</section>
