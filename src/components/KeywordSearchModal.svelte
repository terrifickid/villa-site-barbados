<script>
  export let isOpen = false;
  import { goto } from "$app/navigation";
  let keywords = null;
  function closeModal() {
    isOpen = false;
  }
  function search() {
    console.log(keywords);
    window.location.href = "/search/" + keywords;
  }

  function clickOutside(node) {
    const handleClick = (event) => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        node.dispatchEvent(new CustomEvent("click_outside", node));
      }
    };

    document.addEventListener("click", handleClick, true);

    return {
      destroy() {
        document.removeEventListener("click", handleClick, true);
      },
    };
  }
</script>

{#if isOpen}
  <div
    class="relative z-50"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <!-- Background backdrop with transition -->
    <div class="fixed inset-0 bg-black bg-opacity-70 transition-opacity z-50" />

    <div class="fixed inset-0 z-50 w-screen overflow-y-auto">
      <div
        class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <!-- Modal panel with transition -->
        <div
          use:clickOutside
          on:click_outside={closeModal}
          class="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-xl"
        >
          <div class="p-2 shadow-2xl">
            <form on:submit={search}>
              <input
                required
                bind:value={keywords}
                type="text"
                class="rounded-lg w-full p-4 text-3xl bg-white focus:ring-0 border-0 font-thin font-general"
                placeholder="Properties Search"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
