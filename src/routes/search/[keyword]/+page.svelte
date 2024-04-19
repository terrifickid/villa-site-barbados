<script>
  export let data;
  import PropertyList from "$components/PropertyList.svelte";
</script>

<section>
  <div class="frame py-12 pt-40">
    <p class="v_heading" />
    <p class="mb-12 v_heading">
      Search Results for <i>"{data.keyword}"</i> ({data.results.length})
    </p>
    <PropertyList {data} />
  </div>
</section>
