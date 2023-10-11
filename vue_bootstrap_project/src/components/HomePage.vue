<template>
  <div>
    <h1>Homepage</h1>
    <button @click="changePage('flaglibrary')">Go to Flag Library</button>
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
