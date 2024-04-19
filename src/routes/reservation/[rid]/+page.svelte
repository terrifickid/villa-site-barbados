<script>
  export let data;
</script>

<section class=" frame pt-32 md:pt-40 pb-6">
  <div>
    <h1 class="v_heading flex items-center">Reservation Confirmed</h1>

    <p class="text-gray-600 my-6 text-lg">
      Thank you. Your reservation has been confirmed.
    </p>

    <div class="grid grid-cols-2">
      <div class="mb-6">
        <label class="text-lg block font-medium mb-1">Confirmation Code</label>
        <div class="inline-block border border-bound rounded-md p-4">
          <span class="text-xl text-gray-800">{data.confirmationCode}</span>
        </div>
      </div>
    </div>
  </div>
</section>
