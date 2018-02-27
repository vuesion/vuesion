<template>
  <div :class="cssClasses">
    <img :src="image" v-if="image" :alt="title" />
    <div>
      <div :class="$style.title" v-if="title">{{title}}</div>
      <div :class="$style.subtitle" v-if="subtitle">{{subtitle}}</div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name:       'VuePanelHeader',
    components: {},
    props:      {
      cssClass: {
        type:    String,
        default: 'vuePanelHeader',
      },
      title:    {
        type:     String,
        required: false,
        default:  '',
      },
      subtitle: {
        type:     String,
        required: false,
        default:  '',
      },
      image:    {
        type:     String,
        required: false,
        default:  '',
      },
    },
    data:       function () {
      return {};
    },
    computed:   {
      cssClasses() {
        const classes = ['vue-panel-header', this.$style.vuePanelHeader];

        if (this.image) {
          classes.push(this.$style.withImage);
        }

        classes.push(this.cssClass);

        return classes;
      },
    },
    methods:    {},
  };
</script>

<style lang="scss" module>
  @import "../../../styles";

  .vuePanelHeader {
    display:     block;
    padding:     $panel-header-padding;
    line-height: 1.7;

    &.withImage {
      display:        flex;
      flex-direction: row;

      img {
        width:         $panel-header-image-size;
        height:        $panel-header-image-size;
        border-radius: $panel-header-image-border-radius;
        flex-shrink:   0;
        display:       block;
        margin:        $panel-header-image-margin;
      }
    }

    .title {
      font-size:   $panel-header-title-font-size;
      font-weight: $panel-header-title-font-weight;
      display:     block;
    }

    .subtitle {
      font-size:   $panel-header-subtitle-font-size;
      font-weight: $panel-header-subtitle-font-weight;
      color:       $panel-header-subtitle-color;
      display:     block;
    }
  }
</style>
