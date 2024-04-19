<script>
  export let data;
  import PropertyList from "$components/PropertyList.svelte";
  console.log(data);
</script>

<section>
  <div class="frame py-12 pt-40">
    <p class="mb-12 v_heading">
      Found ({data.results.length})
    </p>
    <PropertyList {data} />
  </div>
</section>
