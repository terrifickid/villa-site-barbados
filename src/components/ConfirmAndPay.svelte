<script>
  export let reservation;
  import _ from "lodash";
  import axios from "axios";

  import Spinner from "$components/Spinner.svelte";
  import { loadStripe } from "@stripe/stripe-js";
  import { onMount } from "svelte";

  let loading = false;
  let stripe = null;
  let cardElement = null;
  let elements = null;
  let guest = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  onMount(async () => {
    stripe = await loadStripe("pk_live_ifI6zGqmmINgBCUQmIKeZqIT");
    elements = stripe.elements();
    cardElement = elements.create("card");
    cardElement.on("change", function (event) {});
    cardElement.mount("#card-element");
  });
  async function createBooking(quoteId, ccToken, ratePlanId, guest) {
    console.log(
      "Got Payment Token, Creating Reservation...",
      quoteId,
      ccToken,
      ratePlanId,
      guest
    );
    try {
      const response = await axios.post(
        "https://vapi-le6wug7tlq-vp.a.run.app/book",
        {
          quoteId,
          ccToken,
          ratePlanId,
          guest,
        }
      );
      if (_.has(response, "data._id")) {
        window.location.href = "/reservation/" + _.get(response, "data._id");
      } else {
        alert("Reservation can not be confirmed. Please contact support.");
        loading = false;
      }
      console.log(response.data);
    } catch (error) {
      alert("Reservation can not be confirmed. Please contact support.");
      loading = false;
      console.error(error);
    }
  }

  async function handleSubmit() {
    event.preventDefault();
    try {
      loading = true;
      console.log("crate token");
      var r = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          name: "Jenny Rosen",
        },
      });
      if (_.has(r, "paymentMethod.id")) {
        var ccToken = _.get(r, "paymentMethod.id");
        var quoteId = _.get(reservation, "_id");
        var ratePlanId = _.get(reservation, "rates.ratePlans[0].ratePlan._id");
        const booking = await createBooking(
          quoteId,
          ccToken,
          ratePlanId,
          guest
        );
      } else {
        loading = false;
      }
    } catch (err) {
      console.log("error!");
      console.log(err);
      loading = false;
    }
  }
</script>

<form on:submit={handleSubmit}>
  <div class="grid grid-cols-2 gap-x-6 mb-4">
    <div class="">
      <label for="location" class="flex text-sm leading-6">First Name</label>
      <input
        bind:value={guest.firstName}
        required
        type="Text"
        name="location"
        class="mt-2 block w-full rounded-full border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-bound sm:text-sm sm:leading-6"
      />
    </div>
    <div class="">
      <label for="location" class="flex text-sm leading-6">Last Name</label>
      <input
        bind:value={guest.lastName}
        required
        type="Text"
        name="location"
        class="mt-2 block w-full rounded-full border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-bound sm:text-sm sm:leading-6"
      />
    </div>
  </div>
  <div class="grid grid-cols-1 gap-6 mb-8">
    <div>
      <label for="location" class="flex text-sm leading-6"> &nbsp;Email</label>
      <input
        bind:value={guest.email}
        required
        type="Text"
        name="location"
        class=" mt-2 block w-full rounded-full border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-bound sm:text-sm sm:leading-6"
      />
    </div>
    <div>
      <label for="location" class="flex text-sm leading-6"> &nbsp;Phone</label>
      <input
        bind:value={guest.phone}
        required
        type="Text"
        name="location"
        class="mt-2 block w-full rounded-full border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-bound sm:text-sm sm:leading-6"
      />
    </div>
  </div>
  <hr class="mb-8" />
  <div>
    <p class="text-xl font-medium">Pay with Credit Card</p>
    <div class="rounded-md bg-gray-100 p-3 my-4">
      <div id="card-element" />
    </div>
    <button
      type="submit"
      class="my-5 inline-flex w-full cursor-pointer items-center justify-center w-auto lg:px-12 px-6 py-4 text-center duration-200 bg-black text-white rounded-full focus:outline-none hover:bg-black ring-white hover:ring-bound ring-1 hover:text-white hover:bg-black"
    >
      {#if loading}
        <Spinner />
      {:else}
        Continue
      {/if}
    </button>
  </div>
</form>
