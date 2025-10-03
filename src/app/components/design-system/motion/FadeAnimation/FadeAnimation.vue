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

<script setup lang="ts"></script>

<style lang="scss" module>
.enterActive,
.leaveActive {
  transition: var(--fade-animation-transition);
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
