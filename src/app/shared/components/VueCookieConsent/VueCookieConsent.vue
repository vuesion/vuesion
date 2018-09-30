<template>
  <fade-animation>
    <div :class="$style.vueCookieConsent" v-if="show" ref="cookieConsent">
      <div :class="$style.content">
        <slot />
      </div>

      <div role="button" :class="$style.button" @click="onConsent">
        <div :class="$style.icon">
          <vue-icon-times />
        </div>
      </div>
    </div>
  </fade-animation>
</template>

<script lang="ts">
  import FadeAnimation from '../../animations/FadeAnimation/FadeAnimation.vue';
  import VueIconTimes  from '../icons/VueIconTimes/VueIconTimes.vue';

  export default {
    name:       'VueCookieConsent',
    components: { FadeAnimation, VueIconTimes },
    props:      {
      currentVersion:          {
        type:     String,
        required: true,
      },
      cookieConsentVersion:    {
        type:     String,
        required: true,
      },
      setCookieConsentVersion: {
        type:     Function,
        required: true,
      },
    },
    computed:   {
      show() {
        return this.currentVersion !== this.cookieConsentVersion;
      },
    },
    methods:    {
      onConsent() {
        this.setCookieConsentVersion(this.currentVersion);
      },
      addBodyPadding() {
        document.body.style.paddingBottom = `${this.$refs.cookieConsent.getBoundingClientRect().height}px`;
      },
      removeBodyPadding() {
        document.body.style.paddingBottom = `0px`;
      },
    },
    mounted() {
      if (this.show) {
        this.addBodyPadding();
      }
    },
    watch:      {
      show(show: boolean) {
        if (!show) {
          this.removeBodyPadding();
        }
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueCookieConsent {
    position:         fixed;
    display:          flex;
    flex-direction:   row;
    z-index:          $nav-bar-index;
    background-color: $panel-bg;
    width:            100%;
    bottom:           0;
    transition:       opacity $transition-duration ease-in-out;
    box-shadow:       0 -1px 3px rgba(0, 0, 0, 0.3);
  }

  .content {
    flex:    1;
    padding: $space-unit * 2;
  }

  .button {
    display:         flex;
    justify-content: center;
    align-items:     center;
    flex:            0 0 $space-unit * 8;
    background:      $button-secondary-bg;
    cursor:          pointer;

    i {
      fill: $button-secondary-color;
    }

    &:hover {
      background-color: $button-secondary-hover-bg;
    }
  }

  .icon {
    flex:       1;
    text-align: center;
  }
</style>
