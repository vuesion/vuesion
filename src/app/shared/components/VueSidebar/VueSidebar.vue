<template>
  <div ref="sidebar">
    <button :class="hamburgerCssClasses" type="button" aria-label="menu" @click="open = !open">
            <span :class="$style.box">
              <span :class="$style.inner" />
            </span>
    </button>
    <div :class="sidebarClasses">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name:       'VueSidebar',
    components: {},
    props:      {},
    data(): any {
      return {
        open: false,
      };
    },
    computed:   {
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
    methods:    {
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
  @import "../../styles";

  .vueSidebar {
    z-index:                    $sidebar-index;
    box-shadow:                 $sidebar-shadow;
    position:                   fixed;
    top:                        0;
    left:                       0;
    height:                     100%;
    background:                 $sidebar-bg;
    color:                      $sidebar-color;
    max-width:                  $sidebar-max-width;
    padding:                    $sidebar-padding;
    overflow-y:                 scroll;
    transform:                  translateX(-100%);
    transition:                 transform $transition-duration ease-in-out;
    width:                      $sidebar-width;
    -webkit-overflow-scrolling: touch;

    &.open {
      transform: translateX(0);
    }
  }

  .hamburger {
    position:                   fixed;
    top:                        $space-unit;
    left:                       $space-unit;
    z-index:                    $modal-index + 2;
    padding:                    $space-unit / 2 $space-unit;
    display:                    inline-block;
    cursor:                     pointer;
    transition-property:        opacity, filter;
    transition-duration:        250ms;
    transition-timing-function: linear;
    font:                       inherit;
    color:                      inherit;
    text-transform:             none;
    border:                     0;
    overflow:                   visible;
    background:                 $sidebar-hamburger-bg;

    .box {
      width:    $space-unit * 4;
      height:   $space-unit * 4;
      display:  inline-block;
      position: relative;
    }

    .inner {
      display:                    block;
      top:                        50%;
      margin-top:                 0;

      &,
      &::before,
      &::after {
        width:                      $space-unit * 4;
        height:                     $space-unit / 2;
        background:                 $sidebar-hamburger-color;
        border-radius:              0;
        position:                   absolute;
        transition-property:        transform;
        transition-duration:        0.15s;
        transition-timing-function: ease;
      }

      &::before,
      &::after {
        content: "";
        display: block;
      }

      &::before {
        top: ($space-unit / 2+ $space-unit / 2) * -1;
      }

      &::after {
        bottom: ($space-unit / 2 + $space-unit / 2) * -1;
      }

      transition-duration:        0.075s;
      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

      &::before {
        transition: top 0.075s 0.12s ease,
                    opacity 0.075s ease;
      }

      &::after {
        transition: bottom 0.075s 0.12s ease,
                    transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
    }

    &.open {
      .inner {
        transform:                  rotate(45deg);
        transition-delay:           0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

        &::before {
          top:        0;
          opacity:    0;
          transition: top 0.075s ease,
                      opacity 0.075s 0.12s ease;
        }

        &::after {
          bottom:     0;
          transform:  rotate(-90deg);
          transition: bottom 0.075s ease,
                      transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
      }
    }
  }
</style>
