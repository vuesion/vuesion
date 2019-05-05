<template>
  <aside ref="sidebar">
    <button :class="hamburgerCssClasses" type="button" aria-label="menu" @click="open = !open">
      <span :class="$style.box"> <span :class="$style.inner" /> </span>
    </button>
    <div :class="sidebarClasses"><slot /></div>
  </aside>
</template>

<script lang="ts">
export default {
  name: 'VueSidebar',
  data(): any {
    return {
      open: false,
    };
  },
  computed: {
    sidebarClasses() {
      const classes: string[] = [this.$style.vueSidebar];

      if (this.open === true) {
        classes.push(this.$style.open);
      }

      return classes;
    },
    hamburgerCssClasses() {
      const classes = [this.$style.hamburger];

      if (this.open === true) {
        classes.push(this.$style.open);
      }

      return classes;
    },
  },
  methods: {
    handleDocumentClick(e: Event) {
      if (this.$refs.sidebar.contains(e.target) === false) {
        this.open = false;
      }
    },
  },
  beforeMount() {
    document.addEventListener('click', this.handleDocumentClick);
    document.addEventListener('touchstart', this.handleDocumentClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener('touchstart', this.handleDocumentClick);
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueSidebar {
  z-index: $sidebar-index;
  box-shadow: $sidebar-shadow;
  position: fixed;
  top: 0;
  left: 0;
  height: $sidebar-height;
  background: $sidebar-bg;
  color: $sidebar-color;
  max-width: $sidebar-max-width;
  padding: $sidebar-padding;
  margin: $sidebar-margin;
  overflow-y: scroll;
  transform: translateX(-100%);
  transition: transform var(--brand-transition-duration) ease-in-out;
  width: $sidebar-width;
  -webkit-overflow-scrolling: touch;

  &.open {
    transform: translateX(0);
  }
}

.hamburger {
  position: fixed;
  top: $space-8 * 1.5;
  left: $space-20;
  height: $space-32;
  z-index: $sidebar-index + 1;
  padding: 0;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 250ms;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  border: 0;
  overflow: visible;
  background: $sidebar-hamburger-bg;

  .box {
    width: $space-32;
    height: $space-32;
    display: inline-block;
    position: relative;
  }

  .inner {
    display: block;
    top: 50%;
    margin-top: 0;

    &,
    &::before,
    &::after {
      width: $space-32;
      height: $space-4 * 0.5;
      background: $sidebar-hamburger-color;
      border-radius: 0;
      position: absolute;
      transition-property: transform;
      transition-duration: 0.15s;
      transition-timing-function: ease;
    }

    &::before,
    &::after {
      content: '';
      display: block;
    }

    &::before {
      top: -$space-8;
    }

    &::after {
      bottom: -$space-8;
    }

    transition-duration: 0.075s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &::before {
      transition: top 0.075s 0.12s ease, opacity 0.075s ease;
    }

    &::after {
      transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }

  &.open {
    background: $sidebar-hamburger-open-bg;

    .inner {
      transform: rotate(45deg);
      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

      &,
      &::before,
      &::after {
        background: $sidebar-hamburger-open-color;
      }

      &::before {
        top: 0;
        opacity: 0;
        transition: top 0.075s ease, opacity 0.075s 0.12s ease;
      }

      &::after {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }
  }
}
</style>
