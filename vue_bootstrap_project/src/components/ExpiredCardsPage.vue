<template>
  <div>
    <h1>Expired Cards Page</h1>
    <button @click="changePage('homepage')">Go to Homepage</button>
  </div>
</template>

<script>
export default {
  methods: {
    changePage(page) {
      this.$emit('changePage', page);
    },
  },
};
</script>
