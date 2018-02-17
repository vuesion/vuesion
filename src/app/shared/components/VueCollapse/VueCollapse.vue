<template>
  <collapse-animation :duration="duration">
    <slot v-if="show" />
  </collapse-animation>
</template>

<script lang="ts">
  import CollapseAnimation from '../../animations/CollapseAnimation/CollapseAnimation';

  export default {
    name:       'VueCollapse',
    components: {
      CollapseAnimation,
    },
    props:      {
      show:     {
        default:  true,
        type:     Boolean,
        required: false,
      },
      duration: {
        type:     Number,
        required: false,
        default:  250,
      },
    },
    data:       function () {
      return {};
    },
    computed:   {},
    methods:    {},
  };
</script>
