<script>
  import { onMount } from "svelte";
  import Hero from "../components/Hero.svelte";
  import About from "../components/About.svelte";
  import Destinations from "../components/Destinations.svelte";
  export let data;
</script>

<Hero {data} />

<Destinations {data} />

<About />
