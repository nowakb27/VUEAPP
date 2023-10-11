<template>
  <div>
    <h1>Flag Library Page</h1>
    <search-bar @search="filterCountries"></search-bar>
    <ul>
      <li v-for="country in filteredCountries" :key="country.id">
        {{ country.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import axios from 'axios';

export default {
  components: {
    'search-bar': SearchBar,
  },
  data() {
    return {
      countries: [],
      filteredCountries: [],
    };
  },
  methods: {
    filterCountries(searchTerm) {
      this.filteredCountries = this.countries.filter((country) =>
          country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
  },
  mounted() {
    axios.get('countries.json').then((response) => {
      this.countries = response.data;
      this.filteredCountries = response.data;
    });
  },
};
</script>

