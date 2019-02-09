<template>
  <transition
    :enter-class="$style.enter"
    :enter-active-class="$style.enterActive"
    :enter-to-class="$style.enterTo"
    :leave-class="$style.leave"
    :leave-active-class="$style.leaveActive"
    :leave-to-class="$style.leaveTo"
  >
    <slot />
  </transition>
</template>

<script lang="ts">
export default {
  name: 'FadeAnimation',
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.enterActive,
.leaveActive {
  transition: $brand-fade-animation-transition;
}

.enterTo,
.leave {
  opacity: 1;
}

.enter,
.leaveTo {
  opacity: 0;
}
</style>
