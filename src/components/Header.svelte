<script>
  export let data;
  let isModalOpen = false;
  import Hero from "$components/Hero.svelte";
  import KeywordSearchModal from "$components/KeywordSearchModal.svelte";

  function openModal() {
    isModalOpen = true;
  }
</script>

<section
  class="fixed bg-black text-white overflow-hidden w-screen z-50 py-7 shadow-md bg-contain"
>
  <div class="mx-auto grid grid-cols-10 frame">
    <div class="col-span-8">
      <span><a href="/"><img src="/vb.png" class="h-6 md:h-7" /></a></span>
    </div>
    <div class="hidden">
      <a href="/favorites" class="fill-black stroke-white hover:stroke-bound">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          class="w-6 h-6 inline"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </a>
    </div>
    <div class="col-span-2 text-right">
      <button
        on:click={openModal}
        class="fill-black stroke-white hover:stroke-bound"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          class="w-6 h-6 inline"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  </div>
  <div />
</section>
<KeywordSearchModal bind:isOpen={isModalOpen} />
