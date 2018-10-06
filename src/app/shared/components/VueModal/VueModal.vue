<template>
  <transition
    @beforeEnter="beforeEnter"
    @enter="enter"
    @beforeLeave="beforeLeave"
    @leave="leave">
    <div :class="[$style.vueModal, fitContent ? $style.fitContent : '']" v-if="show" ref="modal">
      <slot />
    </div>
  </transition>
</template>

<script lang="ts">
  import anime from 'animejs';

  export default {
    name:    'VueModal',
    props:   {
      show:       {
        required: false,
        default:  false,
        type:     Boolean,
      },
      fitContent: {
        type:     Boolean,
        required: false,
        default:  false,
      },
    },
    methods: {
      beforeEnter(el: HTMLElement) {
        el.style.opacity = '0';

        document.getElementById('overlay').style.visibility = 'visible';
      },
      enter(el: HTMLElement, done: any) {
        document.getElementById('overlay').style.opacity = '0.5';
        document.body.style.overflow = 'hidden';

        anime({
                targets:  el,
                opacity:  {
                  value:      '1',
                  duration:   500,
                  elasticity: 0,
                },
                complete: done,
              });
      },
      beforeLeave(el: HTMLElement) {
        el.style.opacity = '1';
      },
      leave(el: HTMLElement, done: any) {
        const overlay: HTMLElement = document.getElementById('overlay');
        overlay.style.opacity = '0';
        document.body.style.overflow = 'initial';

        anime({
                targets: el,
                opacity: {
                  value:      '0',
                  duration:   500,
                  elasticity: 0,
                },
                complete() {
                  overlay.style.visibility = 'hidden';
                  done();
                },
              });
      },
      handleDocumentClick(e: Event) {
        if (this.$refs.modal && this.$refs.modal.contains(e.target) === false) {
          this.$emit('close');
        }
      },
      handleDocumentKeyDown(e: KeyboardEvent) {
        if (e.key === 'Escape') {
          this.$emit('close');
        }
      },
    },
    beforeMount() {
      let overlay: HTMLElement = document.getElementById('overlay');

      if (overlay === null) {
        overlay = document.createElement('div');
        overlay.id = 'overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.zIndex = '2000';
        overlay.style.background = '#000';
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
        overlay.style.transition = 'opacity 250ms linear';
        document.body.appendChild(overlay);
      }

      document.addEventListener('mousedown', this.handleDocumentClick);
      document.addEventListener('touchstart', this.handleDocumentClick);
      document.addEventListener('keydown', this.handleDocumentKeyDown);
    },
    beforeDestroy() {
      document.removeEventListener('mousedown', this.handleDocumentClick);
      document.removeEventListener('touchstart', this.handleDocumentClick);
      document.removeEventListener('keydown', this.handleDocumentKeyDown);
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueModal {
    position:                   fixed;
    top:                        $space-unit;
    left:                       $space-unit;
    bottom:                     $space-unit;
    right:                      $space-unit;
    background:                 $modal-bg;
    z-index:                    $modal-index;
    box-shadow:                 $modal-shadow;
    padding:                    $modal-padding;
    overflow-y:                 scroll;
    -webkit-overflow-scrolling: touch;

    @include mediaMin(tabletPortrait) {
      max-width:  $modal-max-width;
      max-height: 100%;
      position:   fixed;
      top:        50%;
      left:       50%;
      right:      unset;
      bottom:     unset;
      transform:  translate(-50%, -50%);
    }
  }

  .fitContent {
    padding:    0;
    overflow-y: hidden;
    bottom:     initial;
  }
</style>
