<template>
  <div>
    <h2>Flag List</h2>
    <ul>
      <li v-for="flag in flagsData" :key="flag.id">
        <Flag :flagData="flag" @click="openFlagPopup(flag.id)"></Flag>
      </li>
    </ul>
  </div>
</template>

<script>
import Flag from './Flag.vue';

export default {
  props: ['flagsData'],
  components: {
    Flag,
  },
  methods: {
    openFlagPopup(flagId) {
      this.$emit('openFlagPopup', flagId);
    },
  },
};
</script>
