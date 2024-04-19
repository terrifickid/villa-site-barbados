<script>
  // Calculate the dates for today and the next 3 months
  export let plus;

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + parseInt(plus));
  const endDate = new Date();
  endDate.setMonth(currentDate.getMonth() + 1);

  const dateOptions = [];

  while (currentDate <= endDate) {
    const formattedDate = currentDate.toISOString().slice(0, 10);
    dateOptions.push(formattedDate);

    currentDate.setDate(currentDate.getDate() + 1);
  }
</script>

{#each dateOptions as date}
  <option value={date}>{date}</option>
{/each}

<style>
  /* Your styles here */
</style>
