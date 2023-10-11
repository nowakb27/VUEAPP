<template>
  <div class="trip-card">
    <h2>{{ tripData.name }}</h2>
    <p>{{ tripData.description }}</p>
  </div>
</template>

<script>
export default {
  props: ['tripData'],
};
</script>
