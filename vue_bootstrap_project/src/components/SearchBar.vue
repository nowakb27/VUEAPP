<template>
  <div class="search-bar">
    <input type="text" v-model="searchTerm" @input="performSearch" placeholder="Search countries" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    performSearch() {
      this.$emit('search', this.searchTerm);
    },
  },
};
</script>
