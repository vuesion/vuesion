<template>
  <i :class="name"></i>
</template>

<script lang="ts">
  export default {
    name:  'VueIcon',
    props: {
      name: {
        default: 'fab fa-vuejs',
      },
    },
  };
</script>

<style lang="scss" module>

</style>
