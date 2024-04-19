<script>
  export let property;
  export let reservation;
  import _ from "lodash";

  var items = _.get(
    reservation,
    "rates.ratePlans[0].ratePlan.money.invoiceItems"
  );

  // Initialize a variable to store the sum
  let fees = 0;
  let fare = items.shift();
  // Loop through the remaining items and sum their amounts
  for (let i = 0; i < items.length; i++) {
    fees += items[i].amount;
  }

  var items = _.get(
    reservation,
    "rates.ratePlans[0].ratePlan.money.invoiceItems"
  );

  var days = _.get(reservation, "rates.ratePlans[0].days.length");
  var perNight = fare.amount / days;
  console.log(reservation);
  function formatPrice(price, currency) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(price);
  }
</script>

<section class="">
  <div class="border border-black rounded-xl p-6">
    <div class="grid grid-cols-3 flex items-center gap-4">
      <img src={_.get(property, "picture.thumbnail", "")} class="rounded" />
      <div class="col-span-2">
        <p class="font-medium">{_.get(property, "nickname", "")}</p>
        <p class="text-xs mb-2">{_.get(property, "title", "")}</p>

        <div class="grid grid-cols-2">
          <div>
            <p class="font-medium text-xs">Check In</p>
            <p class="text-xs">{reservation.checkInDateLocalized}</p>
          </div>
          <div>
            <p class="font-medium text-xs">Check Out</p>
            <p class="text-xs">{reservation.checkOutDateLocalized}</p>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6" />
    <div>
      <p class="mb-2">{reservation.guestsCount} Guests</p>
    </div>
    <div class="grid grid-cols-2">
      <p>{formatPrice(perNight, "usd")} x {days} Nights</p>
      <p class="text-right">{formatPrice(fare.amount, "usd")}</p>
    </div>
    <div class="grid grid-cols-2">
      <p>Taxes and Fees</p>
      <p class="text-right">{formatPrice(fees, "usd")}</p>
    </div>
    <hr class="my-6" />
    <div class="grid grid-cols-2">
      <p>Total (USD)</p>
      <p class="text-right">{formatPrice(fees + fare.amount, "usd")}</p>
    </div>
  </div>
</section>
