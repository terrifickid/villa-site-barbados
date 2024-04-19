<script>
  export let data;

  import BookingSummary from "$components/BookingSummary.svelte";
  import ConfirmAndPay from "../../../../components/ConfirmAndPay.svelte";

  let reservation = data.data[0].data;
  let property = data.data[1].data;
</script>

<section class=" frame pt-32 md:pt-40 pb-6">
  <div>
    <h1 class="v_heading flex items-center">
      <button
        on:click={() => {
          window.history.back();
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
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <div class="pl-3">Confirm & Pay</div>
    </h1>
    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-24">
      <ConfirmAndPay {reservation} />
      <BookingSummary {reservation} {property} />
    </div>
  </div>
</section>

<style>
</style>
