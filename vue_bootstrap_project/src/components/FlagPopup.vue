<template>
  <div class="flag-popup">
    <h2>Flag Popup</h2>
    <button @click="closeFlagPopup">Close</button>
  </div>
</template>

<script>
export default {
  props: ['flagData'],
  methods: {
    closeFlagPopup() {
      this.$emit('closeFlagPopup');
    },
  },
};
</script>
