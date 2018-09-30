<template>
  <div :class="$style.vueAccordionItem">
    <div :class="$style.header" @click="click" role="button" :aria-label="title">
      {{title}}
      <i :class="iconClasses" />
    </div>
    <vue-collapse :show="show">
      <section
        :class="$style.body"
        :aria-expanded="show">
        <slot />
      </section>
    </vue-collapse>
  </div>
</template>

<script lang="ts">
  import VueCollapse from '../../VueCollapse/VueCollapse.vue';

  export default {
    name:       'VueAccordionItem',
    components: {
      VueCollapse,
    },
    props:      {
      title:    {
        type:     String,
        required: true,
      },
      initOpen: {
        type:     Boolean,
        required: false,
        default:  false,
      },
    },
    data(): any {
      return {
        idx:  null,
        open: false,
      };
    },
    computed:   {
      show() {
        return this.open;
      },
      iconClasses() {
        const classes = [this.$style.icon];

        if (this.show) {
          classes.push(this.$style.open);
        }

        return classes;
      },
    },
    methods:    {
      click() {
        this.$parent.openItem(this.idx);
      },
    },
    created() {
      if (this.$parent.register) {
        this.$parent.register(this);
      }
    },
  };
</script>

<style lang="scss" module>
  @import "../../../styles";

  .vueAccordionItem {
    display: block;
  }

  .header {
    background: $accordion-item-header-bg;
    box-shadow: $accordion-item-header-shadow;
    padding:    $accordion-item-header-padding;
    border:     $accordion-item-header-border;
    position:   relative;
    z-index:    1;
    cursor:     pointer;
  }

  .icon {
    position:   absolute;
    margin-top: $space-unit * 0.5;
    right:      $space-unit;

    &:before, &:after {
      content:          "";
      transition:       all 0.25s ease-in-out;
      position:         absolute;
      background-color: $accordion-item-header-arrow-color;
      width:            2px;
      height:           13px;
    }

    &:before {
      transform: translate(4px, 0) rotate(45deg);
    }

    &:after {
      transform: translate(-4px, 0) rotate(-45deg)
    }

    &.open {
      &:before {
        transform: translate(-4px, 0) rotate(45deg);
      }

      &:after {
        transform: translate(4px, 0) rotate(-45deg)
      }
    }
  }

  .body {
    padding:  $accordion-item-body-padding;
    position: relative;
    z-index:  0;
  }
</style>
