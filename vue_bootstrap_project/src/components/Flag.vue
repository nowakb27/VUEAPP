<template>
  <div class="flag">
    <h2>{{ flagData.country }}</h2>
    <img :src="flagData.flagUrl" alt="Flag of {{ flagData.country }}">
  </div>
</template>

<script>
export default {
  props: ['flagData'],
};
</script>
